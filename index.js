document.addEventListener('DOMContentLoaded', () => {
    let result = document.getElementById('result');
    const rarities = {
        plus1: 0.65,
        plus2: 0.30,
        plus3: 0.05
    };
    const items = [
        // +
        {name: "Sword", rarity: "plus1"},
        {name: "Bow", rarity: "plus1"},
        {name: "Shield", rarity: "plus1"},
        // ++
        {name: "Spear", rarity: "plus2"},
        {name: "Mace", rarity: "plus2"},
        {name: "Grapple", rarity: "plus2"},
        // +++
        {name: "SINDORB", rarity: "plus3"},
        {name: "VEIR", rarity: "plus3"},
        {name: "COOL GUY", rarity: "plus3"}
    ];
    
    document.getElementById('rollB').addEventListener('click', roll);
    let lever = new Audio('lever.wav');
    
    function pick(){
        let rarityPicker = Math.random();
        let selectedRarity;
        
        if(rarityPicker < rarities.plus3){
            selectedRarity = "plus3";
        } else if(rarityPicker < rarities.plus3 + rarities.plus2){
            selectedRarity = "plus2";
        } else {
            selectedRarity = "plus1";
        }
        
        let itemsOfRarity = items.filter(item => item.rarity === selectedRarity);
        let itemPicker = Math.floor(Math.random() * itemsOfRarity.length);
        let randomItem = itemsOfRarity[itemPicker];
        
        result.textContent = randomItem.name;
    }
    
    function roll() {
        lever.currentTime = 0;
        lever.play();
        pick();
    }
});
