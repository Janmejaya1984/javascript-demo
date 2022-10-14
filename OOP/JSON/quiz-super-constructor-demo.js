class Shelter{
    constructor(shelter_for){
         this.shelter_for=shelter_for
    }
 }
 
 class Cage extends Shelter{
     constructor(shelter_for,lock){
         super(shelter_for,lock)
         this.lock = lock
     }
     getCage(){
         console.log(this.shelter_for + "cage has "+  this.lock + " lock type ");
         }
 }
 
 monkey_cage = new Cage("monkey","closed")
 monkey_cage.getCage()