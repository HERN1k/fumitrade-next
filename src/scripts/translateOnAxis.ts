export class TranslateOnAxis {
    static readonly ZERO_X: TranslateOnAxis = new TranslateOnAxis(0, "px", "X");
    static readonly ZERO_Y: TranslateOnAxis = new TranslateOnAxis(0, "px", "Y");
    static readonly BASE: string = "translate(0, 0)";
    static readonly BASE_WITH_SEMICOLON: string = "translate(0, 0);";

    _position: number = 0;
    _units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px";
    _axis: "X" | "Y" = "X";

    constructor(
        position: number = 0, 
        units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px",
        axis: "X" | "Y" = "X"
    ) {
        this._position = position;
        this._units = units;
        this._axis = axis;
    }

    set(
        position: number = 0, 
        units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px",
        axis: "X" | "Y" = "X"
    ): void {
        this._position = position;
        this._units = units;
        this._axis = axis;
    }

    setPosition(position: number = 0): void {
        this._position = position;
    }

    setUnits(units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" = "px"): void {
        this._units = units;
    }

    setAxis(axis: "X" | "Y" = "X"): void {
        this._axis = axis;
    }

    get(): { 
        position: number, 
        units: "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh",
        axis: "X" | "Y"
    } {
        return { 
            position: this._position,
            units: this._units,
            axis: this._axis
        };
    }

    getPosition(): number {
        return this._position;
    }

    getUnits(): "px" | "%" | "em" | "rem" | "dvw" | "dvh" | "vw" | "vh" {
        return this._units;
    }

    getAxis(): "X" | "Y" {
        return this._axis;
    }

    getZero(semicolon: boolean = false): string {
        return `translate${this._axis}(0${this._units})${semicolon ? ";" : ""}`;
    }

    clone(): TranslateOnAxis {
        return new TranslateOnAxis(this._position, this._units, this._axis);
    }

    equals(obj: TranslateOnAxis): boolean {
        return this._position === obj.getPosition() && this._units === obj.getUnits() && this._axis === obj.getAxis();
    }

    toString(semicolon: boolean = false) {
        return `translate${this._axis}(${this._position}${this._units})${semicolon ? ";" : ""}`;
    }
}