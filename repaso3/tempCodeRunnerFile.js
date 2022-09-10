	let koderList = ['Hector', 'Manu', 'Jonathan', 'Fernando', 'Cintia', 'Fanny', 'Rodri', 'Rafa', 'Deni', 'Emanuel', 'Victor', 'Benjamin', 'Xavy', 'Annie']; // variable global


    let deleteKoder = (koderName) => {
        let newList = [];
        let j = 0;
        for(let i = 0; i < koderList.length; i++) {
            if(koderList[i] !== koderName) {
                newList[j] = koderList[i]; 
                j++;
            } 
        }
        koderList = newList;
    };

    deleteKoder('aldo');
    console.log(koderList);

    deleteKoder('Hector');
    console.log(koderList);

    deleteKoder('Xavy');
    console.log(koderList);