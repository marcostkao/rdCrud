export class Produto {
    constructor(
        public cod?: number,
        public desc?: string,
        public regAnvisa?: string,
        public controlado?: boolean,
        public codGrupo?: number
    ) { }
}