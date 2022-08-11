// Recursion example #1: Finding the total depth and length of a cave system
interface IData {
    length: number;
    depth: number;
    id: string;
    branches: IData[]
}

const data: IData = {
    length: 4.5,
    depth: 2.4,
    id: "001",
    branches: [
        {
            length: 4.5,
            depth: 2.4,
            id: "005",
            branches: [
                
            ]
        },
        {
            length: 41.5,
            depth: 23.4,
            id: "006",
            branches: [
                
            ]
        },
        {
            length: 7.5,
            depth: 6.4,
            id: "007",
            branches: [
                {
                    length: 8.5,
                    depth: 8.4,
                    id: "008",
                    branches: [
                        
                    ]
                },
                {
                    length: 88.5,
                    depth: 23.4,
                    id: "009",
                    branches: [
                        {
                            length: 848.5,
                            depth: 233.4,
                            id: "010",
                            branches: [
                                
                            ]
                        }
                    ]
                }
            ]
        }
    ]
}

let totalDepth = 0
let totalLength = 0

const getTotalDepthAndLength = (data: IData) => {
    totalDepth += data.depth
    totalLength += data.length

    if (!data.branches.length) {
        console.log(`${data.id} has no more sub caves.`)
    } else {
        data.branches.forEach((branch)=>{
            getTotalDepthAndLength(branch)
        })
    }
} 

getTotalDepthAndLength(data)

console.log("TOTAL CAVE DEPTH (m)", totalDepth)
console.log("TOTAL CAVE LENGTH (m)", totalLength)


// Recursion example #2: Adding numbers from array (without reduce)

const sumNumbers = (numbers: number[], base: number): number => {
    if (numbers.length) {
        base += numbers[numbers.length - 1]
        let newNumbers = numbers.slice(0, numbers.length - 1)
        return sumNumbers(newNumbers, base)
    } else {
        return base
    }
}



console.log(sumNumbers([1,2, 10], 0))
console.log(sumNumbers([], 0))
console.log(sumNumbers([10, 12], 0))

console.log(sumNumbers([1,2,3,4,5,6,7,8], 0))