import { _decorator, Component, instantiate, tween } from 'cc';
import { GameManager } from './GameManager';
import { SlotItem } from './SlotItem';
import { EventManager, EventType } from '../Core/EventManaget';
import { DataManager } from '../Core/DataManager';

const { ccclass, property } = _decorator;

enum ReelState {
    Idle,
    StartSpin,
    LoopSpin,
    EndSpin,
}

@ccclass('Reel')
export class Reel extends Component {
    private static maxItem: number = 10;
    private static slotItemHeight = 110; // include spacing
    private static loopSpinTime = 3;
    private static speed = 1500;

    private endLoopTimestamp: number = 0;
    private state: ReelState = ReelState.Idle;
    private delay: number = 1;

    onLoad() {
        EventManager.emitter.on(EventType.START_SPIN, () => {
            this.startSpin();
        });
    }

    start() {
        this.initItems();
    }

    update(dt) {
        if (this.state == ReelState.LoopSpin) {
            let position = this.node.position.clone();
            position.y -= Reel.speed * dt;

            let maxPosY = -Reel.slotItemHeight * DataManager.Instance.getSymbolsLength();

            if (position.y <= maxPosY) {
                position.y -= maxPosY;
            }

            this.node.position = position;
        }
    }

    initItems() {
        var itemPrefab = GameManager.Instance.getPrefabSlotItem();
        var slotData = DataManager.Instance.slots;

        for (let i = 0; i < Reel.maxItem; i++) {
            let gameObject = instantiate(itemPrefab);
            gameObject.parent = this.node;

            let typeIndex = i % slotData.length;
            gameObject.getComponent(SlotItem).Init(slotData[typeIndex].itemType);
        }
    }

    public startSpin() {
        if (this.state != ReelState.Idle) return;

        this.endLoopTimestamp = Date.now() + this.delay * 1000;
        this.state = ReelState.LoopSpin;
    }

    public showResult() {
        if (this.state != ReelState.LoopSpin) return;


    }
}

