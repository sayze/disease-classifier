export class Stage {
    constructor(id = '', label = '') {
        this.id = id
        this.label = label
    }

    toString() { return this.label }
}


/**
 * @param {number} sysBp 
 * @param {number} dialBp 
 * @returns {Stage}
 */
export function classify(sysBp = 0, dialBp = 0) {
    let stage = new Stage('hype-s0', 'No Hypertension');

    if (sysBp >= 180 && dialBp >= 120) {
        stage.id = 'hype-s3'
        stage.label = 'Stage 3' 
    }

    if ((sysBp >= 160 && sysBp < 180) || (dialBp >= 100 < 110)) {
        stage.id = 'hype-s2'
        stage.label = 'Stage 2' 
    }

    if ((sysBp >= 140 && sysBp < 160) || (dialBp >= 90 < 100)) {
        stage.id = 'hype-s1'
        stage.label = 'Stage 1' 
    }

    return stage;
}