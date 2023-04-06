var naytaNumero;
var talletaRahaa;
var nostaRahaa;
var muisti = [];
var korkoPlusLaina = 0;

var tilitehty = false;
var lainojenMaara = 0;

class Pankki {
    constructor (tilinumero = "", saldo = 0, historia = [], laina, korkoProsentti, korko, luottoraja, lainaaJaljella, lainaEnnen, luottoprosentti, nettoTulot) {
        this.tilinumero = String (tilinumero);
        this.saldo = saldo;
        this.historia = historia;
        this.laina = Number(laina);
        this.korkoProsentti = Number(korkoProsentti);
        this.korko = Number(korko);

        this.luottoraja = Number(luottoraja);

        this.lainaaJaljella = Number(lainaaJaljella);
        this.nettoTulot = Number(nettoTulot);
        this.lainaEnnen = Number(lainaEnnen);
        this.luottoprosentti = Number(luottoprosentti);
    }

    talleta() {
        var tarkastus = this.saldo;
        
        talletaRahaa = parseInt(prompt("Paljonko haluat tallettaa rahaa?"));
        this.saldo += talletaRahaa;
        this.historia.push(aika() + " Talletit rahaa " + talletaRahaa);
        console.log(this.saldo);
        document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen tapahtumaa oli: " + tarkastus;

    }
    otaLainaa() {
        console.log("111");
        if(tilitehty == true){
            var lainaMaara = Number(prompt("Paljonko otat lainaa?"));
            console.log(lainaMaara);
            if(isNaN(lainaMaara < 0)){
                document.getElementById("lainaTeksti").innerHTML = "Et voi käyttää negatiivisia lukuja!";
            }else{
                lainojenMaara++
                if(lainojenMaara == 1){
                    this.laina = lainaMaara;
                }else{
                    this.laina += lainaMaara;
                    console.log(this.laina);
                }
            }
            this.korkoProsentti = 10;
            this.korko = Math.floor(this.laina * this.korkoProsentti / 100);
            this.lainaEnnen = korkoPlusLaina;
            korkoPlusLaina = this.korko + this.laina;
            muisti.push(korkoPlusLaina);
            console.log(typeof(this.lainaEnnen), typeof(korkoPlusLaina));
            this.historia.push(aika() + ": Otit lainaa " + lainaMaara + "€. Maksettavaa lainaa ennen lainausta: " + this.lainaEnnen
                                      + "€. Lainanoton jälkeen: " + korkoPlusLaina);
        }else if(tilitehty == true){}else{
            document.getElementById("tilitiedot").innerHTML = "Syötä tilinumerosi";
        }
    }
    lainanMaksu() {
        if (tilitehty == true) {
            var maksettuLaina = Number(document.getElementById("lainanMaksu").value)
            if(isNaN(maksettuLaina) == true){ 
               console.log("Syötä vain numeroita");
               document.getElementById("lainanmaksuTeksti").innerHTML = "Syötä vain numeroita";
            }else{
                if(maksettuLaina <= -1){ 
                    document.getElementById("lainanmaksuTeksti").innerHTML = "Älä syötä negatiivisia lukuja";
                } else{
                    console.log(this.lainaaJaljella , maksettuLaina ,   this.lainaaJaljella - maksettuLaina);
                    if(this.lainaaJaljella - maksettuLaina == NaN){
                        if(maksettuLaina < 0){
                            document.getElementById("lainanmaksuTeksti").innerHTML = "Lainasi menee miinukselle";
                        }
                    }else{
                        if(this.lainaaJaljella - maksettuLaina <= -1){
                            document.getElementById("lainanmaksuTeksti").innerHTML = "Lainasi menee miinukselle";
                        } else {
                            
                            this.lainaaJaljella = muisti[0] - maksettuLaina;
                            muisti.splice([0],1,this.lainaaJaljella )
    
                            document.getElementById("lainanmaksuTeksti").innerHTML = "Maksoit lainaasi: " + maksettuLaina + "€";
                            this.korkoPlusLainaClassGlobal = this.lainaaJaljella;
                            this.historia.push(hankiAika() + ": Maksoit lainaa " + maksettuLaina + "€. Laina ennen maksua: " + this.lainaEnnen + "€. Maksun jälkeen: " + this.lainaaJaljella + "€.")
                        }
                    }
                }
            }   
        }
    }
    netto(){
        if (tilitehty == true) {
            
            var nettoSumma = Number(prompt("netto"));
            console.log(nettoSumma);

            if(isNaN(nettoSumma)){
                document.getElementById("nettoTeksti").innerHTML = "Syötä vain numeroita";
                console.log("a");
            } else {
                if(nettoSumma <0){
                    
                    console.log("a");
                }else{
                    
                    this.nettoTulot = nettoSumma;
                    this.historia.push(aika() + ": ilmoitit nettotulosi olevan: " + this.nettoTulot + "€")
                    console.log(this.nettoTulot);
                }
            }
        }
    }

    luotto(netostaTiedot){
        if(tilitehty == true){
            var otettuKorkoProsentti = 0;
            var maxLuotto = 25 * this.nettoTulot / 100;
            console.log(maxLuotto + " = max");
            console.log("Voit ottaa luottoa 0-" + maxLuotto + "€");
            alert("Voit ottaa luottoa 0-" + maxLuotto + "€")    
            var luottoSumma = Number(prompt("luotto"));
            console.log(luottoSumma);

            if(isNaN(luottoSumma)){ 
                
            } else{
                if(luottoSumma < 0){
                    
                }
            }
            

            if(netostaTiedot == false){  
                document.getElementById("luottoTeksti").innerHTML = "Voit ottaa luottoa:" + 0 + "€ - " + maxLuotto +"€";
            }else{ 
                
                if(luottoSumma > maxLuotto){
                    
                } else {
                    
                    otettuKorkoProsentti = luottoSumma * 25 / maxLuotto;
                    this.luottoprosentti = otettuKorkoProsentti
                    console.log(this.luottoprosentti + "%");
    
                    
                    this.luottoraja = luottoSumma;
                    
                    this.historia.push(aika() +  ": Otit luottoa: " + luottoSumma + "€.")
                }
            }
        }
    }

    naytaTiedot() {
        document.getElementById("asiakasTiedot").innerHTML = "Tilinumerosi on:" + " " + this.tilinumero + '<br>' + "Tilin saldo on:" + " " + this.saldo + "€" + '<br>' + "Tilisi historia:";
        var luottorajaTeksti = 0;
    }
    naytaHistoria() {
        var t = "";
        t = document.getElementById("historia").innerHTML = "Viimeisimmän talletuksesi ajankohta on:" + " " + aika();
        var viimeisin = this.historia[this.historia.length-1]
        console.log(viimeisin);
        document.getElementById("nosto").innerHTML = "Viimeisin tapahtuma:" + " " + viimeisin;

    }

}


class Pankki2 extends Pankki{
    constructor(tilinumero, saldo, historia, korkoProsentti, korko, luottoraja, laina, lainaaJaljella, nettoTulot, lainaEnnen, luottoprosentti){
        super(tilinumero, saldo, historia, korkoProsentti, korko, luottoraja, laina, lainaaJaljella, nettoTulot, lainaEnnen, luottoprosentti);
    }
    tiliNumero() {
        var tNumero = prompt("Mikä on tilinumerosi?");
        var regex = /[A-Z]{2}\d{2} ?\d{4} ?\d{4} ?\d{4} ?\d{2} ?[\d]{0,0}/;
        
        if (regex.test(tNumero)) {
            this.tilinumero = tNumero;
            tilitehty = true;
        } else {
        console.log("Tilinumero on virheellinen");   
        }
    }
    nosta() {
        var tarkastus = this.saldo;

        nostaRahaa = parseInt(prompt("Paljonko haluat nostaa rahaa?"));
        if (nostaRahaa <= this.saldo) {
           this.saldo -= nostaRahaa;
           this.historia.push(aika() + " Nostit rahaa " + nostaRahaa);
           console.log(this.saldo);
           document.getElementById("saldoEnnen").innerHTML = "Saldosi ennen tapahtumaa oli: " + tarkastus;
        } else {
            alert ("Virhe! Tililläsi ei ole katetta.");
        }
    }
}

let tili = new Pankki2();


function aika (){
    var date = new Date;
    return date;
}