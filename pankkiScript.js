var naytaNumero;
var talletaRahaa;
var nostaRahaa;

class Pankki {
    constructor (tilinumero = "", saldo = 0, historia = []) {
        this.tilinumero = String (tilinumero);
        this.saldo = saldo;
        this.historia = historia;
    }

    talleta() {
        var tarkastus = this.saldo;
        
        talletaRahaa = parseInt(prompt("Paljonko haluat tallettaa rahaa?"));
        this.saldo += talletaRahaa;
        this.historia.push(aika() + " Talletit rahaa " + talletaRahaa);
        console.log(this.saldo);
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen tapahtumaa oli: " + tarkastus;

    }
    nosta() {
        var tarkastus = this.saldo;

        nostaRahaa = parseInt(prompt("Paljonko haluat nostaa rahaa?"));
        if (nostaRahaa <= this.saldo) {
           this.saldo -= nostaRahaa;
        } else {
            alert ("Virhe! Tililläsi ei ole katetta.");
        }
        this.historia.push(aika() + " Nostit rahaa " + nostaRahaa);
        console.log(this.saldo);
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen tapahtumaa oli: " + tarkastus;
    }
    naytaTiedot() {
        document.getElementById("asiakasTiedot").innerHTML = "Tilinumerosi on:" + " " + "FI6484062814942054" + this.tilinumero + '<br>' + "Tilin saldo on:" + " " + this.saldo + "€" + '<br>' + "Tilisi historia:";
    }
    naytaHistoria() {
        var t = "";
        t = document.getElementById("historia").innerHTML = "Viimeisimmän talletuksesi ajankohta on:" + " " + aika();
        var viimeisin = this.historia[this.historia.length-1]
        console.log(viimeisin);
        document.getElementById("nosto").innerHTML = "Viimeisin tapahtuma:" + " " + viimeisin;

    }
}

let tili = new Pankki();

function aika (){
    var date = new Date;
    return date;
}