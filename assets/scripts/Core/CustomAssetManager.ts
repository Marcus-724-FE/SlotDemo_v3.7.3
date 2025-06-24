import { _decorator, Component } from 'cc';
import { SymbolType, SlotData } from './Interface';

const { ccclass, property } = _decorator;

@ccclass('CustomAssetManager')
export class CustomAssetManager extends Component {
    @property(SlotData) slots: SlotData[] = [];

    public static Instance: CustomAssetManager = null;

    onLoad() {
        CustomAssetManager.Instance = this;
    }

    public getSlotAsset(type: SymbolType) {
        return this.slots.find(asset => asset.itemType == type).texture;
    }
}

