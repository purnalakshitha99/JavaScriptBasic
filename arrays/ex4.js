const numbers = [1,2,3,4,5,6];

const output1 = move(numbers,2,3);
console.log(output1);

function move (array,index,offset){

    const position = (index + offset);
    if(position >= array.length|| position < 0){
        return 'invalid enters';
    }
    const output = [...array];
    const element = output.splice(index,1)[0];//splice eken wenne index ekt watena value eka ain karana ekai eka api variable ekakat da gattama ain karana eka variable eke thiyei
    console.log(element)
    const element2 = output.splice(index+offset,0,element)//dan meke index + offset ekathu unama enne = 3 ethakota thunweni index ekata element eke value eka dagannawa ,,,,element eke value eka 3....     |output.splice(2+1,0,3)
       return output;
}