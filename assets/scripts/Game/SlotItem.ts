import { _decorator, Component, Node, Sprite } from 'cc';
import { ItemType } from '../Core/interface';
import { CustomAssetManager } from '../Core/CustomAssetManager';

const { ccclass, property } = _decorator;

@ccclass('SlotItem')
export class SlotItem extends Component {
    @property(Sprite) spriteRenderer: Sprite = null;

    onLoad() {

    }

    start() {

    }

    Init(type: ItemType) {
        // Render texture
        var spriteFrame = CustomAssetManager.Instance.getSlotAsset(type);
        this.spriteRenderer.spriteFrame = spriteFrame;
    }
}

