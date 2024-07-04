// Returns a random DNA base
const returnRandBase = () => {
    const dnaBases = ['A', 'T', 'C', 'G'];
    return dnaBases[Math.floor(Math.random() * 4)];
  };
  
  // Returns a random single strand of DNA containing 15 bases
  const mockUpStrand = () => {
    const newStrand = [];
    for (let i = 0; i < 15; i++) {
      newStrand.push(returnRandBase());
    }
    return newStrand;
  };
  
  function pAequorFactory(number, array) {
    return {
      specimenNum: number,
      dna: array,
      mutate: function() {
        let index = Math.floor(Math.random() * this.dna.length);
        let currentBase = this.dna[index];
        let newBase = returnRandBase();
        while (newBase === currentBase) {
          newBase = returnRandBase();
        }
        this.dna[index] = newBase;
        return this.dna;
      },
      compareDNA: function(pAequor) {
        let count = 0;
        for (let i = 0; i < this.dna.length; i++) {
          if (this.dna[i] === pAequor.dna[i]) {
            count += 1;
          }
        }
        let percentage = (count / this.dna.length) * 100;
        console.log(`specimen ${this.specimenNum} and specimen ${pAequor.specimenNum} have ${percentage.toFixed(2)}% DNA in common`);
      },
  
      willLikelySurvive: function(){
        let count = 0;
        for (let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === 'C' || this.dna[i] === 'G'){
            count += 1;
          }
        }
        let percentage = (count / this.dna.length) * 100;
        if (percentage >= 60){
          return true;
        } else {
          return false;
        }
      },
  
      complementStrand: function(){
        let complementArray = [];
        for(let i = 0; i < this.dna.length; i++){
          if (this.dna[i] === 'A'){
            complementArray.push('T')
          } else if (this.dna[i] === 'T'){
            complementArray.push('A');
          } else if (this.dna[i] === 'C'){
            complementArray.push('G');
          } else if (this.dna[i] === 'G'){
            complementArray.push('C');
          } else {
            complementArray.push(this.dna[i]);
          }
        }
        return complementArray;
      }
    };
  }
  
  let pAequorInstances = [];
  let idCounter = 1;
  while (pAequorInstances.length < 30){
    let newpAequor = pAequorFactory(idCounter, mockUpStrand());
    if (newpAequor.willLikelySurvive()){
      pAequorInstances.push(newpAequor);
      idCounter++;
    }
  }
  console.log(pAequorInstances);
  