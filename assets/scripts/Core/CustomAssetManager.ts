import { _decorator, Component } from 'cc';
import { ItemType, SlotAsset } from './interface';

const { ccclass, property } = _decorator;

@ccclass('CustomAssetManager')
export class CustomAssetManager extends Component {
    @property(SlotAsset) slots: SlotAsset[] = [];

    public static Instance: CustomAssetManager = null;

    onLoad() {
        CustomAssetManager.Instance = this;
    }

    public getSlotAsset(type: ItemType) {
        return this.slots.find(asset => asset.itemType == type).texture;
    }
}

