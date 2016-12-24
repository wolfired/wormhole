import { Component, ComponentConstructor, COMPONENT_IDX } from './Component';
import { IEntity } from './IEntity';

/**
 * 实体类
 */
export class Entity implements IEntity {
    public constructor() {
    }

    public TryGet<T extends Component>(cc: ComponentConstructor<T>): T {
        let idx: uint = <uint>cc[COMPONENT_IDX];
        if (void 0 === idx) {
            return void 0;
        }

        return <T>this._component_map[idx];
    }

    public Get<T extends Component>(cc: ComponentConstructor<T>): T {
        let idx: uint = <uint>cc[COMPONENT_IDX];
        if (void 0 === idx) {
            throw "Error idx";
        }

        let com = this._component_map[idx];
        if (void 0 === com) {
            this._component_map[cc[COMPONENT_IDX]] = com = new cc(this);
        }
        return <T>com;
    }

    private _component_map: Component[] = [];
}
