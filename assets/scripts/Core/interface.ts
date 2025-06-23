import { _decorator, SpriteFrame } from 'cc';

const { ccclass, property } = _decorator;

export enum ItemType {
    None = "None",
    Item_J = "Item_J",
    Item_Q = "Item_Q",
    Item_K = "Item_K",
    Item_Coin = "Item_Coin",
}

@ccclass('SlotAsset')
export class SlotAsset {
    @property({ type: ItemType }) itemType: ItemType = ItemType.None;
    @property(SpriteFrame) texture: SpriteFrame = null;
}