import { _decorator, Node, Component, Prefab } from "cc";
import { Reel } from "./Reel";
import { SymbolType } from "../Core/Interface";

const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Reel) reels: Reel[] = [];
    @property(Node) btnPlay: Node = null;
    @property(Prefab) symbolPrefab: Prefab = null;
    @property(Prefab) reelPrefab: Prefab = null;

    public static Instance: GameManager = null;
    private totalItemType: number = 0;
    private columns: number = 5;
    private rows: number = 4;

    onLoad() {
        GameManager.Instance = this;

        this.totalItemType = Object.keys(SymbolType).length;

        this.btnPlay.on(Node.EventType.TOUCH_END, () => {
            this.startGame();
        });
    }

    public getPrefabSlotItem() {
        return this.symbolPrefab;
    }

    startGame() {
        // Get result
        var result = this.createResult();

        // Render result
        this.reels.forEach((reel) => {
            reel.startSpin();
        });
    }

    createResult() {
        const result = [];
        const columns = 5;
        const rows = 4;

        for (let i = 0; i < columns; i++) {
            const columnResult = [];

            for (let j = 0; j < rows; j++) {
                let randomType = this.randomItemType();
                columnResult.push(randomType)
            }

            result.push(columnResult);
        }

        return result;
    }

    randomItemType() {
        let random = Math.floor(Math.random() * this.totalItemType);
        let type = SymbolType[random];
        return type;
    }
}