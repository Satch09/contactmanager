/*

Schema:
[
  '{{repeat(5, 60)}}',
  {
    index: '{{index()}}',
    name: '{{firstName()}} {{surname()}}',
    email: '{{email()}}',
    phone: '{{phone()}}'
  }
]
From: https://www.json-generator.com/

*/
  let contacts = [
    {
      "id": 0,
      "name": "Marlene Landry",
      "email": "marlenelandry@billmed.com",
      "phone": "(997) 524-3399"
    },
    {
      "id": 1,
      "name": "Dorothea Rivera",
      "email": "dorothearivera@billmed.com",
      "phone": "(823) 456-2223"
    },
    {
      "id": 2,
      "name": "Eaton Callahan",
      "email": "eatoncallahan@billmed.com",
      "phone": "(851) 511-2860"
    },
    {
      "id": 3,
      "name": "Joyce Lindsey",
      "email": "joycelindsey@billmed.com",
      "phone": "(949) 444-2221"
    },
    {
      "id": 4,
      "name": "Roberson Dominguez",
      "email": "robersondominguez@billmed.com",
      "phone": "(874) 402-3757"
    },
    {
      "id": 5,
      "name": "Marcy Bruce",
      "email": "marcybruce@billmed.com",
      "phone": "(988) 564-3448"
    },
    {
      "id": 6,
      "name": "Shepard Ryan",
      "email": "shepardryan@billmed.com",
      "phone": "(933) 527-3946"
    },
    {
      "id": 7,
      "name": "Webster Armstrong",
      "email": "websterarmstrong@billmed.com",
      "phone": "(939) 471-2127"
    },
    {
      "id": 8,
      "name": "Jo Adkins",
      "email": "joadkins@billmed.com",
      "phone": "(874) 496-3849"
    },
    {
      "id": 9,
      "name": "Tabatha Parsons",
      "email": "tabathaparsons@billmed.com",
      "phone": "(975) 449-3240"
    },
    {
      "id": 10,
      "name": "Johnston Barrera",
      "email": "johnstonbarrera@billmed.com",
      "phone": "(817) 542-2108"
    },
    {
      "id": 11,
      "name": "Dianna Cunningham",
      "email": "diannacunningham@billmed.com",
      "phone": "(826) 493-3065"
    },
    {
      "id": 12,
      "name": "Emma Yang",
      "email": "emmayang@billmed.com",
      "phone": "(884) 538-3383"
    },
    {
      "id": 13,
      "name": "Minnie Nichols",
      "email": "minnienichols@billmed.com",
      "phone": "(886) 526-3629"
    },
    {
      "id": 14,
      "name": "Buckley Reyes",
      "email": "buckleyreyes@billmed.com",
      "phone": "(943) 480-3078"
    },
    {
      "id": 15,
      "name": "Alison Vargas",
      "email": "alisonvargas@billmed.com",
      "phone": "(994) 557-3768"
    },
    {
      "id": 16,
      "name": "Jodi Ramirez",
      "email": "jodiramirez@billmed.com",
      "phone": "(992) 471-2302"
    },
    {
      "id": 17,
      "name": "Hazel Massey",
      "email": "hazelmassey@billmed.com",
      "phone": "(840) 598-3401"
    },
    {
      "id": 18,
      "name": "Janine Weiss",
      "email": "janineweiss@billmed.com",
      "phone": "(983) 496-2876"
    },
    {
      "id": 19,
      "name": "Nash Vance",
      "email": "nashvance@billmed.com",
      "phone": "(967) 540-3717"
    },
    {
      "id": 20,
      "name": "Kennedy Stevens",
      "email": "kennedystevens@billmed.com",
      "phone": "(819) 411-3590"
    },
    {
      "id": 21,
      "name": "Leonor Black",
      "email": "leonorblack@billmed.com",
      "phone": "(865) 575-2065"
    },
    {
      "id": 22,
      "name": "Heidi Leblanc",
      "email": "heidileblanc@billmed.com",
      "phone": "(906) 475-2111"
    },
    {
      "id": 23,
      "name": "Frye Dickerson",
      "email": "fryedickerson@billmed.com",
      "phone": "(817) 437-2491"
    },
    {
      "id": 24,
      "name": "Harrell Oneill",
      "email": "harrelloneill@billmed.com",
      "phone": "(957) 454-2457"
    },
    {
      "id": 25,
      "name": "Galloway Manning",
      "email": "gallowaymanning@billmed.com",
      "phone": "(899) 518-3031"
    },
    {
      "id": 26,
      "name": "Ilene Bullock",
      "email": "ilenebullock@billmed.com",
      "phone": "(931) 456-3285"
    },
    {
      "id": 27,
      "name": "Fisher Watkins",
      "email": "fisherwatkins@billmed.com",
      "phone": "(824) 539-2551"
    },
    {
      "id": 28,
      "name": "Patrick Kane",
      "email": "patrickkane@billmed.com",
      "phone": "(963) 599-2236"
    },
    {
      "id": 29,
      "name": "Vera Simon",
      "email": "verasimon@billmed.com",
      "phone": "(975) 582-2856"
    },
    {
      "id": 30,
      "name": "Farley Sparks",
      "email": "farleysparks@billmed.com",
      "phone": "(850) 449-2926"
    },
    {
      "id": 31,
      "name": "Desiree Fisher",
      "email": "desireefisher@billmed.com",
      "phone": "(865) 563-2388"
    },
    {
      "id": 32,
      "name": "Shelley Hurley",
      "email": "shelleyhurley@billmed.com",
      "phone": "(878) 596-2287"
    },
    {
      "id": 33,
      "name": "Ashley Duncan",
      "email": "ashleyduncan@billmed.com",
      "phone": "(949) 544-3268"
    },
    {
      "id": 34,
      "name": "Carolina Love",
      "email": "carolinalove@billmed.com",
      "phone": "(953) 512-3778"
    },
    {
      "id": 35,
      "name": "Vazquez Odom",
      "email": "vazquezodom@billmed.com",
      "phone": "(971) 454-3204"
    },
    {
      "id": 36,
      "name": "Franks Carr",
      "email": "frankscarr@billmed.com",
      "phone": "(883) 460-3146"
    },
    {
      "id": 37,
      "name": "Burke Avila",
      "email": "burkeavila@billmed.com",
      "phone": "(961) 518-2190"
    },
    {
      "id": 38,
      "name": "Holt Mayo",
      "email": "holtmayo@billmed.com",
      "phone": "(903) 567-2012"
    },
    {
      "id": 39,
      "name": "Irma Glass",
      "email": "irmaglass@billmed.com",
      "phone": "(817) 461-3269"
    },
    {
      "id": 40,
      "name": "Jordan Crosby",
      "email": "jordancrosby@billmed.com",
      "phone": "(971) 550-3170"
    },
    {
      "id": 41,
      "name": "Jackson Lynch",
      "email": "jacksonlynch@billmed.com",
      "phone": "(845) 546-3376"
    },
    {
      "id": 42,
      "name": "Stacey Boyd",
      "email": "staceyboyd@billmed.com",
      "phone": "(957) 429-2084"
    },
    {
      "id": 43,
      "name": "Yvette Sullivan",
      "email": "yvettesullivan@billmed.com",
      "phone": "(848) 421-2749"
    },
    {
      "id": 44,
      "name": "Petersen Osborn",
      "email": "petersenosborn@billmed.com",
      "phone": "(856) 536-3180"
    },
    {
      "id": 45,
      "name": "Katy Cherry",
      "email": "katycherry@billmed.com",
      "phone": "(924) 479-3391"
    },
    {
      "id": 46,
      "name": "Gregory Mosley",
      "email": "gregorymosley@billmed.com",
      "phone": "(876) 596-2457"
    },
    {
      "id": 47,
      "name": "Bowen Conley",
      "email": "bowenconley@billmed.com",
      "phone": "(943) 514-3049"
    },
    {
      "id": 48,
      "name": "Erin Dixon",
      "email": "erindixon@billmed.com",
      "phone": "(939) 509-3292"
    },
    {
      "id": 49,
      "name": "Hebert Wilkerson",
      "email": "hebertwilkerson@billmed.com",
      "phone": "(816) 548-3351"
    },
    {
      "id": 50,
      "name": "Potter Porter",
      "email": "potterporter@billmed.com",
      "phone": "(815) 492-3915"
    },
    {
      "id": 51,
      "name": "Robin Hines",
      "email": "robinhines@billmed.com",
      "phone": "(892) 515-2801"
    },
    {
      "id": 52,
      "name": "Fulton Wolfe",
      "email": "fultonwolfe@billmed.com",
      "phone": "(874) 401-3150"
    },
    {
      "id": 53,
      "name": "Salas Rivers",
      "email": "salasrivers@billmed.com",
      "phone": "(960) 580-2998"
    },
    {
      "id": 54,
      "name": "Madge Jacobs",
      "email": "madgejacobs@billmed.com",
      "phone": "(938) 419-3038"
    },
    {
      "id": 55,
      "name": "Bailey Olson",
      "email": "baileyolson@billmed.com",
      "phone": "(904) 471-3479"
    },
    {
      "id": 56,
      "name": "Sims Dale",
      "email": "simsdale@billmed.com",
      "phone": "(841) 447-2841"
    },
    {
      "id": 57,
      "name": "Lowe Howard",
      "email": "lowehoward@billmed.com",
      "phone": "(911) 554-3962"
    },
    {
      "id": 58,
      "name": "Carrie Ashley",
      "email": "carrieashley@billmed.com",
      "phone": "(926) 594-3143"
    },
    {
      "id": 59,
      "name": "Dollie Combs",
      "email": "dolliecombs@billmed.com",
      "phone": "(913) 539-3228"
    }
  ]

export default contacts;