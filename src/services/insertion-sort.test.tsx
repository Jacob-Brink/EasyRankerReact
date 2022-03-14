import  { InsertionSort } from './insertion-sort';

const collection: Array<number> = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

let randomSort = [...collection];
randomSort.sort((a, b) => { return Math.floor(Math.random()*3-1); });

// determines insertion position based on numerical value
// stub for user controlled comparison
const comparisonFunction = (pivots: number[], item: number) => {
    let lowerBound = pivots.length;
    for (let i = 0; i < pivots.length; i++) {
        if (item < pivots[i]) {
            lowerBound = i;
            break;
        }
    };
    return lowerBound;
}

it('binary insertion sort correctly orders list', () => {

    // binary insertion sort requires only 1 pivot
    const sort = new InsertionSort(randomSort, 1);   

    expect(sort.sort(comparisonFunction)).toEqual(collection);

});

it('non binary insertion sort correctly orders list', () => {
    const PIVOT_COUNTS = [2, 3, 4, 5, 20];
    PIVOT_COUNTS.forEach(pivot_count => {
        const sorter = new InsertionSort(randomSort, pivot_count);
        expect(sorter.sort(comparisonFunction)).toEqual(collection);
    });
});