const amar = {
    name: "Amar",
    skill: "singer",
    city: "Goa",
    borrow: function (skill){
        console.log(`${this.name} borrow ${skill}`);
    }
}


const akbar = {
    name: "Akbar",
    skill: "chef",
    city: "Mumbai",
    borrow: function (skill){
        console.log(`${this.name} borrow ${skill}`);
    }
}

const anthony = {
    name: "Anthony",
    skill: "Magician",
    city: "Kashmir",
    borrow: function (skill){
        console.log(`${this.name} borrow ${skill}`);
    }
}

amar.borrow.call(amar,anthony.skill);
akbar.borrow.call(akbar,amar.skill);
anthony.borrow.call(anthony,akbar.skill);