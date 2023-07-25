import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  OnDestroy,
  OnInit,
} from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss'],
})
export class CardComponent
  implements
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  pokemon = [
    {
      numero: 'N° 0001',
      nome: 'Bulbasaur',
      descrizione:
        'Fin dalla nascita questo Pokémon ha sulla schiena un seme che cresce lentamente.',
      categoria: 'Seme',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/001.png',
    },
    {
      numero: 'N° 0002',
      nome: 'Ivysaur',
      descrizione:
        'Il bulbo sulla schiena è cresciuto così tanto da impedirgli di alzarsi in piedi sulle zampe posteriori.',
      categoria: 'Seme',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/002.png',
    },
    {
      numero: 'N° 0003',
      nome: 'Venusaur',
      descrizione:
        'Il fiore sboccia assorbendo energia solare. Si muove continuamente in cerca di luce.',
      categoria: 'Seme',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/003.png',
    },
    {
      numero: 'N° 0004',
      nome: 'Charmander',
      descrizione:
        'Ama le cose calde. Si dice che quando piove gli esca vapore dalla punta della coda.',
      categoria: 'Lucertola',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/004.png',
    },
    {
      numero: 'N° 0005',
      nome: 'Charmeleon',
      descrizione:
        'Ha un’indole feroce. Usa la coda fiammeggiante come una frusta e lacera l’avversario con gli artigli affilati.',
      categoria: 'Fiamma',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/005.png',
    },
    {
      numero: 'N° 0006',
      nome: 'Charizard',
      descrizione:
        'Si dice che la fiamma di Charizard abbia una temperatura tanto più alta quanto più dure sono le lotte che ha affrontato.',
      categoria: 'Fiamma',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/006.png',
    },
    {
      numero: 'N° 0007',
      nome: 'Squirtle',
      descrizione:
        'Quando ritrae il lungo collo dentro la corazza sputa un vigoroso getto d’acqua.',
      categoria: 'Tartaghina',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/007.png',
    },
    {
      numero: 'N° 0008',
      nome: 'Wartortle',
      descrizione:
        'È considerato un simbolo di longevità. Se c’è del muschio sul suo guscio, significa che è molto anziano.',
      categoria: 'Tartaruga',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/008.png',
    },
    {
      numero: 'N° 0009',
      nome: 'Blastoise',
      descrizione:
        'Mette KO gli avversari schiacciandoli sotto il corpo possente. Se è in difficoltà, può ritrarsi nella corazza.',
      categoria: 'Crostaceo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/009.png',
    },
    {
      numero: 'N° 0010',
      nome: 'Caterpie',
      descrizione:
        'Per proteggersi emette un puzzo terribile dalle antenne sul capo, con cui tiene lontani i nemici.',
      categoria: 'Baco',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/010.png',
    },
    {
      numero: 'N° 0011',
      nome: 'Metapod',
      descrizione:
        'In attesa di evolversi, l’unica cosa che può fare è indurire la sua corazza, quindi rimane immobile per evitare di essere attaccato.',
      categoria: 'Bozzolo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/011.png',
    },
    {
      numero: 'N° 0012',
      nome: 'Butterfree',
      descrizione:
        'Adora il nettare dei fiori e riesce a localizzare i campi in cui si trova anche solo una minima quantità di polline.',
      categoria: 'Farfalla',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/012.png',
    },
    {
      numero: 'N° 0013',
      nome: 'Weedle',
      descrizione:
        'Ha un pungiglione acuminato sul capo. Vive tra l’erba alta e nei boschi, dove si nutre di foglie.',
      categoria: 'Millepiedi',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/013.png',
    },
    {
      numero: 'N° 0014',
      nome: 'Kakuna',
      descrizione:
        'È molto limitato nei movimenti. Se si sente minacciato, estrae il pungiglione e avvelena il nemico.',
      categoria: 'Bozzolo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/014.png',
    },
    {
      numero: 'N° 0015',
      nome: 'Beedrill',
      descrizione:
        'Possiede tre aculei velenosi, due sulle zampe anteriori e uno sull’addome, con cui punge ripetutamente i nemici.',
      categoria: 'Velenape',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/015.png',
    },
    {
      numero: 'N° 0016',
      nome: 'Pidgey',
      descrizione:
        'Di indole docile, preferisce gettare sabbia verso il nemico per proteggersi piuttosto che attaccarlo.',
      categoria: 'Uccellino',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/016.png',
    },
    {
      numero: 'N° 0017',
      nome: 'Pidgeotto',
      descrizione:
        'Un Pokémon pieno di vitalità che vola instancabile sul suo territorio in cerca di prede.',
      categoria: 'Uccello',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/017.png',
    },
    {
      numero: 'N° 0018',
      nome: 'Pidgeot',
      descrizione:
        'Può volare a una velocità di Mach 2 in cerca di prede. I suoi artigli sono armi micidiali.',
      categoria: 'Uccello',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/018.png',
    },
    {
      numero: 'N° 0019',
      nome: 'Rattata',
      descrizione:
        'Con i suoi incisivi rode qualsiasi cosa. Se se ne avvista uno, è probabile che in zona vivano almeno 40 esemplari.',
      categoria: 'Topo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/019.png',
    },
    {
      numero: 'N° 0020',
      nome: 'Raticate',
      descrizione:
        'Dispone di zampe posteriori palmate che gli permettono di nuotare nei fiumi in cerca di prede.',
      categoria: 'Topo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/020.png',
    },
    {
      numero: 'N° 0021',
      nome: 'Spearow',
      descrizione:
        'Incapace di raggiungere alte quote, sorvola il suo territorio a gran velocità per proteggerlo.',
      categoria: 'Uccellino',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/021.png',
    },
    {
      numero: 'N° 0022',
      nome: 'Fearow',
      descrizione:
        'Questo Pokémon molto antico vola in alto nel cielo al minimo accenno di pericolo.',
      categoria: 'Becco',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/022.png',
    },
    {
      numero: 'N° 0023',
      nome: 'Ekans',
      descrizione:
        'Si allunga sempre più con l’età. La notte si avvolge attorno a qualche ramo per dormire.',
      categoria: 'Serpente',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/023.png',
    },
    {
      numero: 'N° 0024',
      nome: 'Arbok',
      descrizione:
        'Gli spaventosi disegni che ha sulla pancia sono oggetto di studio. Ne sono state scoperte sei diverse variazioni.',
      categoria: 'Cobra',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/024.png',
    },
    {
      numero: 'N° 0025',
      nome: 'Pikachu',
      descrizione:
        'Quando s’arrabbia, libera subito l’energia accumulata nelle sacche sulle guance.',
      categoria: 'Topo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/025.png',
    },
    {
      numero: 'N° 0026',
      nome: 'Raichu',
      descrizione:
        'La sua coda scarica elettricità a terra, proteggendolo dalle scosse elettriche.',
      categoria: 'Topo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/026.png',
    },
    {
      numero: 'N° 0027',
      nome: 'Sandshrew',
      descrizione:
        'Ama rotolarsi nella sabbia delle zone desertiche, per rimuovere ogni traccia di sporcizia e umidità dal suo corpo.',
      categoria: 'Topo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/027.png',
    },
    {
      numero: 'N° 0028',
      nome: 'Sandslash',
      descrizione:
        'Più secco è il territorio dove Sandslash vive, più i suoi aculei dorsali diventano lisci e duri.',
      categoria: 'Topo',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/028.png',
    },
    {
      numero: 'N° 0029',
      nome: 'Nidoran',
      descrizione:
        'È più sensibile agli odori rispetto ai maschi. Capta le correnti d’aria con le vibrisse e si posiziona sottovento per cercare le prede.',
      categoria: 'Velenago',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/029.png',
    },
    {
      numero: 'N° 0030',
      nome: 'Nidorina',
      descrizione:
        'Si pensa che il corno sulla fronte si sia atrofizzato per evitare che Nidorina punga i suoi cuccioli quando li nutre.',
      categoria: 'Velenago',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/030.png',
    },
    {
      numero: 'N° 0031',
      nome: 'Nidoqueen',
      descrizione:
        'Più abile nella difesa che nell’attacco, protegge i cuccioli da qualunque attacco grazie alla corazza di squame.',
      categoria: 'Trapano',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/031.png',
    },
    {
      numero: 'N° 0032',
      nome: 'Nidoran',
      descrizione:
        'Il corno sulla fronte è estremamente velenoso. Di indole circospetta, rizza costantemente le sue grandi orecchie.',
      categoria: 'Velenago',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/032.png',
    },
    {
      numero: 'N° 0033',
      nome: 'Nidorino',
      descrizione:
        'Vaga alla ricerca di una Pietralunare frantumando rocce con il suo corno più duro del diamante.',
      categoria: 'Velenago',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/033.png',
    },
    {
      numero: 'N° 0034',
      nome: 'Nidoking',
      descrizione:
        'Quando si scatena non c’è modo di fermarlo, ma davanti a Nidoqueen, la sua compagna di lunga data, ritrova la calma.',
      categoria: 'Trapano',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/034.png',
    },
    {
      numero: 'N° 0035',
      nome: 'Clefairy',
      descrizione:
        'Si dice che vedere un gruppo di Clefairy ballare con la luna piena sia di ottimo auspicio.',
      categoria: 'Fata',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/035.png',
    },
    {
      numero: 'N° 0036',
      nome: 'Clefable',
      descrizione:
        'Timido Pokémon Fata, molto raro a vedersi. Scappa e si nasconde non appena avverte la presenza delle persone.',
      categoria: 'Fata',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/036.png',
    },
    {
      numero: 'N° 0037',
      nome: 'Vulpix',
      descrizione:
        'Quando è giovane ha sei meravigliose code, che si moltiplicano durante la sua crescita.',
      categoria: 'Volpe',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/037.png',
    },
    {
      numero: 'N° 0038',
      nome: 'Ninetales',
      descrizione:
        'Dicono che viva un millennio. Ognuna delle sue code è dotata di un potere magico.',
      categoria: 'Volpe',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/038.png',
    },
    {
      numero: 'N° 0039',
      nome: 'Jigglypuff',
      descrizione:
        'Quando i suoi occhioni rotondi tremolano, canta una misteriosa melodia che fa addormentare.',
      categoria: 'Pallone',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/039.png',
    },
    {
      numero: 'N° 0040',
      nome: 'Wigglytuff',
      descrizione:
        'Ha un pelo molto fino. Attenzione a non farlo adirare, perché può gonfiarsi e caricare con tutto il suo peso.',
      categoria: 'Pallone',
      img: 'https://assets.pokemon.com/assets/cms2/img/pokedex/full/040.png',
    },
  ];

  constructor() {
    console.log('costruttore');
  }
  ngOnDestroy(): void {
    console.log('destroy');
  }
  ngOnInit(): void {
    console.log('ngOnInit');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck');
  }
  ngAfterContentInit(): void {
    console.log(' ngAfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked');
  }
}
