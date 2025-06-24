import { _decorator, Component, instantiate, Node, Sprite, tween, v2, v3, Vec2, Vec3 } from 'cc';
import { GameManager } from './GameManager';

const { ccclass, property } = _decorator;

@ccclass('Reel')
export class Reel extends Component {
    private defaultPosition: Vec3;
    private startPosition: Vec3;
    private endPosition: Vec3;
    private loopPosition: Vec3;

    private static maxItem: number = 5;

    onLoad() {

    }

    start() {
        this.defaultPosition = this.node.position;
        this.startPosition = this.node.position.add(v3(0, 50, 0));
        this.endPosition = this.node.position.add(v3(0, 150, 0));
        this.loopPosition = this.node.position.add(v3(0, -500, 0));

        this.initItems();
    }

    initItems() {
        var itemPrefab = GameManager.Instance.getPrefabSlotItem();

        for (let i = 0; i < Reel.maxItem; i++) {
            let gameObject = instantiate(itemPrefab);
            gameObject.parent = this.node;
        }
    }

    public startSpin() {
        tween(this.node.position).by(0.2, { y: 50 }).start();
    }

    public showResult() {

    }
}

