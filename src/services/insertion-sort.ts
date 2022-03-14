import { Comparison } from "./comparison";

export class InsertionSort {
    
    collection: Array<number>;
    comparisons: Array<Comparison>;
    maxPivotCount: number;

    constructor(collection: Array<number>, maxPivotCount: number = 1, comparisons: Array<Comparison> = []) {
        this.collection = collection;
        this.comparisons = comparisons;
        this.maxPivotCount = maxPivotCount;
    }

    sort(compareCallback: (pivots: Array<number>, item: number) => number) {

        let sorted: Array<number> = [];

        this.collection.forEach(currentItem => {
            
            // for each item, initialize search area to entire sorted list
            let lowerBound = -1;
            let upperBound = sorted.length;

            // continue refining search area until item can be inserted
            while (upperBound-lowerBound > 1) {

                const remainingSearchArea = sorted.slice(lowerBound+1, upperBound);
                const pivotCount = Math.min(remainingSearchArea.length, this.maxPivotCount);
                const searchAreas = pivotCount+1;
                const areaLength = Math.floor((remainingSearchArea.length+1) / searchAreas);

                // calculate pivot items
                let pivots: Array<number> = [];
                for (let j = 1; j < searchAreas; j++) {
                    pivots.push(sorted[lowerBound + j*areaLength]);
                    // pivots.push(lowerBound + j*areaLength)
                }
                // ask user to refine search area by selecting between given pivots
                // For example, returning 0 would mean item is lower than all pivot items
                const space = compareCallback(pivots, currentItem);

                // update search area boundaries appropriately
                lowerBound += space * areaLength;
                // if user choose highest search area, keep upperBound at it's current value, else offset from lowerBound
                upperBound = space == pivots.length ? upperBound : lowerBound + areaLength;
                
            }

            // insert item
            sorted.splice(lowerBound+1, 0, currentItem);

        });

        return sorted;
        
    }

}