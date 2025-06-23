import { _decorator, Node, Component } from "cc";
import { Reel } from "./Reel";

const { ccclass, property } = _decorator;

@ccclass('GameManager')
export class GameManager extends Component {
    @property(Node) btnPlay: Node = null;
    @property(Reel) reels: Reel[] = [];

    onLoad() {
        this.btnPlay.on(Node.EventType.TOUCH_END, () => {
            this.startGame();
        });
    }

    startGame() {

    }
}