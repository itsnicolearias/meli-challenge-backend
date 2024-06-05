export function isMutant(dna) {
    const n = dna.length;
    const seqLength = 4;
    
    // Función para verificar si hay una secuencia de longitud `seqLength` en un array
    const hasSequence = (arr) => {
        for (let i = 0; i <= arr.length - seqLength; i++) {
            const seq = arr.slice(i, i + seqLength);
            if (seq.every(char => char === seq[0])) {
                return true;
            }
        }
        return false;
    };

    // Verificar horizontalmente
    for (let row of dna) {
        if (hasSequence(row.split(''))) {
            return true;
        }
    }

    // Verificar verticalmente
    for (let col = 0; col < n; col++) {
        const column = dna.map(row => row[col]);
        if (hasSequence(column)) {
            return true;
        }
    }

    // Verificar diagonalmente (izquierda a derecha)
    for (let i = 0; i <= n - seqLength; i++) {
        for (let j = 0; j <= n - seqLength; j++) {
            const diagonal1 = [];
            const diagonal2 = [];
            for (let k = 0; k < seqLength; k++) {
                diagonal1.push(dna[i + k][j + k]);
                diagonal2.push(dna[i + k][n - j - k - 1]);
            }
            if (hasSequence(diagonal1) || hasSequence(diagonal2)) {
                return true;
            }
        }
    }

    return false;
}