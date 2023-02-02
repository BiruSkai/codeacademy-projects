// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single strand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

function pAequorFactory (specimenNumber, arrDNA) {
  return  { 
      number: specimenNumber,
      arrDNA: arrDNA,
    // Method DNA Array with mutation
      mutate() {
    // Get Mutation Point
      let mutationPoint = Math.floor(Math.random() * 15);
    // Delete the old base in DNA Bases
      const dnaBases = ['A', 'T', 'C', 'G'];
      dnaBases.splice(dnaBases.indexOf(this.arrDNA[mutationPoint]), 1);
    // Get the mutated Base
      let mutatedBase = dnaBase[Math.floor(Math.random() * 3)];
      console.log(`Mutationpoint of old DNA in position ${mutationPoint} is swapped with mutated base of ${mutatedBase}. `)
      // Insert the mutated base in mutated position of the old DNA array. 
      return this.arrDNA.splice(mutationPoint, 1, mutatedBase)},
      
    // Compare similarity of DNA
      compareDNA(otherPAequor) {
        console.log(`Passed in DNA array: ${this.arrDNA}`)
        console.log(`PAequor DNA array: ${otherPAequor.arrDNA}`)
        let count = 0;
        let i = 0;
        while (i < this.arrDNA.length) {
          if(this.arrDNA[i] === otherPAequor.arrDNA[i]) {
            count++; 
          }
          i++;
        } 
        let similarity = (count / this.arrDNA.length) * 100;
        similarity = similarity.toFixed(1);
        console.log(`This PAequor specimen ${otherPAequor.number} has ${similarity} % DNA similarity with passed in PAequer specimen ${this.number}.`)
      },
      // Are G and C bases at least 60% in DNA array? 
      /*my method
      willLikelySurvive() {
        let count = 0;
        let dnaLength = this.arrDNA.length;
        for ( let i = 0; i < dnaLength; i++) {
          if (this.arrDNA[i] === "G" || this.arrDNA[i] === "C") {
            count++
          }
        }
        let chanceSurvive = (count / dnaLength) * 100;
        console.log(chanceSurvive)
        if ( chanceSurvive >= 60) {
          return true;
        } else return false;
      }
      */
      //Alternative
      willLikelySurvive() {
        const CnG = this.arrDNA.filter(letter => letter === "C" || letter === "G");
        if ((CnG.length / arrDNA.length) * 100 >= 60) {
          return true;
        } else return false; 
      },

      // Create a complementstrand
      complementStrand () {
        let strand = [];
        for ( let i = 0, number = this.arrDNA.length; i < number; i++ ) {
          if ( this.arrDNA[i] === "T") {
            strand.push("A");
          }
          else if ( this.arrDNA[i] === "A") {
            strand.push("T");
          }
          else if ( this.arrDNA[i] === "G") {
            strand.push("C");
          }
          else if ( this.arrDNA[i] === "C") {
            strand.push("G");
          } else strand.push(this.arrDNA[i]);
        } 
        return `Original DNA Strand: ${this.arrDNA} and complement strand: ${strand}.`
      }
  }
}

/* Trigger for getting the survived DNA 
// Storing 30 samples of survived DNA array
let survivedDnaInstances = [];
for (let i = 0; survivedDnaInstances.length < 30; i++) {
  let temp = pAequorFactory(i, mockUpStrand());
  if (temp.willLikelySurvive() === true ) {
    survivedDnaInstances.push(temp);
    }
console.log(survivedDnaInstances)
console.log(survivedDnaInstances.length)
*/

//Trigger for comparing DNA specimens
for (let i = 0; i < 1; i++) {
  let temp1 = pAequorFactory(i, mockUpStrand());
  for ( let k = 1; k < 3; k++) {
    let temp2 = pAequorFactory(k, mockUpStrand());
    (temp1.compareDNA(temp2));
  }
}

    