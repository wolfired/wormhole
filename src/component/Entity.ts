import { Component, ComponentConstructor, ComponentType, ErrNotRegister, IEntity } from './internal';

/**
 * 实体类
 */
export class Entity implements IEntity {
    public static New(): IEntity {
        return new Entity();
    }

    private constructor() {
    }

    public TryGet<T extends Component>(cc: ComponentConstructor<T> & ComponentType): T {
        let idx: uint = cc.IDX;
        if (Component.IDX === idx) {
            throw ErrNotRegister;
        }

        let com = this._component_map[idx];
        if (void 0 === com) {
            return null!;
        }
        return <T>com;
    }

    public Get<T extends Component>(cc: ComponentConstructor<T> & ComponentType): T {
        let idx: uint = cc.IDX;
        if (Component.IDX === idx) {
            throw ErrNotRegister;
        }

        let com = this._component_map[idx];
        if (void 0 === com) {
            this._component_map[cc.IDX] = com = new cc(this);
        }
        return <T>com;
    }

    private _component_map: Component[] = [];
}
