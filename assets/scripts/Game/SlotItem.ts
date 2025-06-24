import { _decorator, Component, Node, Sprite } from 'cc';
import { SymbolType } from '../Core/Interface';
import { CustomAssetManager } from '../Core/CustomAssetManager';

const { ccclass, property } = _decorator;

@ccclass('SlotItem')
export class SlotItem extends Component {
    @property(Sprite) spriteRenderer: Sprite = null;

    onLoad() {

    }

    start() {

    }

    Init(type: SymbolType) {
        // Render texture
        var spriteFrame = CustomAssetManager.Instance.getSlotAsset(type);
        this.spriteRenderer.spriteFrame = spriteFrame;
    }
}

