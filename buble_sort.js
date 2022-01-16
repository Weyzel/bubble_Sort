function bubbleSort(arr){
    let i, j;
    const len = arr.length;
    let isSwapped = false;
    for(i =0; i < len; i++)
    {
        isSwapped = false;
        for(j = 0; j < len; j++)
        {
            if(arr[j] > arr[j + 1])
            {
                const temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
                isSwapped = true;
            }
        }
        if(!isSwapped)break;
    }
}

function generateArray(){
    let arr = [];
    let len = Math.floor(Math.random() * 100) + 1;
    for(let i = 0; i < len; i++) 
        arr.push(Math.floor(Math.random() * 100));
    return arr;
}

function printArray(){
    let arr = generateArray();
    console.log("Unsorted Array: ");
    console.log(arr);
    bubbleSort(arr);
    console.log("Sorted Array: ");
    console.log(arr);
}

printArray();
