import React, {Component} from 'react';

const Context = React.createContext();

const reducer = (state, action) => {
	switch(action.type) {
	case 'DELETE_CONTACT':
		return {
			...state,
			contacts: state.contacts.filter(contact => contact.id !== action.payload
			)
		};
	case 'ADD_CONTACT':
		return {
			...state,
			contacts: [ action.payload, ...state.contacts ]
		};
	default:
		return state;
	}
};

// This will be the global state of the app that everything works off of
export class Provider extends Component {

  state = {
  	contacts: [
  		{
  			'id': 0,
  			'name': 'Estes Everett',
  			'email': 'esteseverett@zomboid.com',
  			'phone': '(910) 402-2004'
  		},
  		{
  			'id': 1,
  			'name': 'Jean Weiss',
  			'email': 'jeanweiss@zomboid.com',
  			'phone': '(983) 458-2160'
  		},
  		{
  			'id': 2,
  			'name': 'Mari Burke',
  			'email': 'mariburke@zomboid.com',
  			'phone': '(886) 571-3119'
  		},
  		{
  			'id': 3,
  			'name': 'Ballard Potts',
  			'email': 'ballardpotts@zomboid.com',
  			'phone': '(833) 549-3614'
  		},
  		{
  			'id': 4,
  			'name': 'Thomas Cooley',
  			'email': 'thomascooley@zomboid.com',
  			'phone': '(908) 420-3196'
  		},
  		{
  			'id': 5,
  			'name': 'Reeves Small',
  			'email': 'reevessmall@zomboid.com',
  			'phone': '(921) 404-3112'
  		},
  		{
  			'id': 6,
  			'name': 'Montgomery Kane',
  			'email': 'montgomerykane@zomboid.com',
  			'phone': '(952) 474-3273'
  		},
  		{
  			'id': 7,
  			'name': 'Houston Fuentes',
  			'email': 'houstonfuentes@zomboid.com',
  			'phone': '(841) 559-3487'
  		},
  		{
  			'id': 8,
  			'name': 'Lorna Vance',
  			'email': 'lornavance@zomboid.com',
  			'phone': '(877) 462-3114'
  		},
  		{
  			'id': 9,
  			'name': 'Bruce Conrad',
  			'email': 'bruceconrad@zomboid.com',
  			'phone': '(938) 505-2756'
  		},
  		{
  			'id': 10,
  			'name': 'Cooley Bailey',
  			'email': 'cooleybailey@zomboid.com',
  			'phone': '(800) 525-2531'
  		},
  		{
  			'id': 11,
  			'name': 'Latoya Greer',
  			'email': 'latoyagreer@zomboid.com',
  			'phone': '(954) 481-3731'
  		},
  		{
  			'id': 12,
  			'name': 'Lorraine Hutchinson',
  			'email': 'lorrainehutchinson@zomboid.com',
  			'phone': '(876) 540-2138'
  		},
  		{
  			'id': 13,
  			'name': 'Marylou Blackwell',
  			'email': 'maryloublackwell@zomboid.com',
  			'phone': '(924) 574-2872'
  		},
  		{
  			'id': 14,
  			'name': 'Roberts Malone',
  			'email': 'robertsmalone@zomboid.com',
  			'phone': '(835) 469-2722'
  		},
  		{
  			'id': 15,
  			'name': 'Eula Bowman',
  			'email': 'eulabowman@zomboid.com',
  			'phone': '(944) 471-3175'
  		},
  		{
  			'id': 16,
  			'name': 'Ola Holmes',
  			'email': 'olaholmes@zomboid.com',
  			'phone': '(988) 480-2257'
  		},
  		{
  			'id': 17,
  			'name': 'Browning Zamora',
  			'email': 'browningzamora@zomboid.com',
  			'phone': '(838) 590-2473'
  		},
  		{
  			'id': 18,
  			'name': 'Harrison Blake',
  			'email': 'harrisonblake@zomboid.com',
  			'phone': '(982) 505-3886'
  		},
  		{
  			'id': 19,
  			'name': 'Deloris Mcneil',
  			'email': 'delorismcneil@zomboid.com',
  			'phone': '(946) 507-3083'
  		},
  		{
  			'id': 20,
  			'name': 'Margie Alford',
  			'email': 'margiealford@zomboid.com',
  			'phone': '(898) 576-2746'
  		},
  		{
  			'id': 21,
  			'name': 'Jeanie Russell',
  			'email': 'jeanierussell@zomboid.com',
  			'phone': '(882) 527-2150'
  		},
  		{
  			'id': 22,
  			'name': 'Jessie Pratt',
  			'email': 'jessiepratt@zomboid.com',
  			'phone': '(937) 588-2181'
  		},
  		{
  			'id': 23,
  			'name': 'Galloway Mcfadden',
  			'email': 'gallowaymcfadden@zomboid.com',
  			'phone': '(848) 551-3524'
  		},
  		{
  			'id': 24,
  			'name': 'Althea Wilkins',
  			'email': 'altheawilkins@zomboid.com',
  			'phone': '(906) 416-3925'
  		},
  		{
  			'id': 25,
  			'name': 'Jaime Blair',
  			'email': 'jaimeblair@zomboid.com',
  			'phone': '(936) 541-2714'
  		},
  		{
  			'id': 26,
  			'name': 'Conley Figueroa',
  			'email': 'conleyfigueroa@zomboid.com',
  			'phone': '(864) 401-2065'
  		},
  		{
  			'id': 27,
  			'name': 'Silvia Stanley',
  			'email': 'silviastanley@zomboid.com',
  			'phone': '(939) 564-3246'
  		},
  		{
  			'id': 28,
  			'name': 'Kristie Ellison',
  			'email': 'kristieellison@zomboid.com',
  			'phone': '(822) 548-3739'
  		},
  		{
  			'id': 29,
  			'name': 'Roslyn Ayers',
  			'email': 'roslynayers@zomboid.com',
  			'phone': '(861) 502-2513'
  		},
  		{
  			'id': 30,
  			'name': 'Ashley Maxwell',
  			'email': 'ashleymaxwell@zomboid.com',
  			'phone': '(989) 469-2863'
  		},
  		{
  			'id': 31,
  			'name': 'Lynette Horton',
  			'email': 'lynettehorton@zomboid.com',
  			'phone': '(964) 466-3853'
  		},
  		{
  			'id': 32,
  			'name': 'Waller Caldwell',
  			'email': 'wallercaldwell@zomboid.com',
  			'phone': '(918) 586-3210'
  		},
  		{
  			'id': 33,
  			'name': 'Kline Donovan',
  			'email': 'klinedonovan@zomboid.com',
  			'phone': '(926) 501-2255'
  		},
  		{
  			'id': 34,
  			'name': 'Lyons Gross',
  			'email': 'lyonsgross@zomboid.com',
  			'phone': '(833) 415-2852'
  		},
  		{
  			'id': 35,
  			'name': 'Gladys Banks',
  			'email': 'gladysbanks@zomboid.com',
  			'phone': '(942) 538-3138'
  		},
  		{
  			'id': 36,
  			'name': 'Anne Levy',
  			'email': 'annelevy@zomboid.com',
  			'phone': '(948) 592-2185'
  		},
  		{
  			'id': 37,
  			'name': 'Mcgee Galloway',
  			'email': 'mcgeegalloway@zomboid.com',
  			'phone': '(904) 439-2620'
  		},
  		{
  			'id': 38,
  			'name': 'Rhodes Alvarado',
  			'email': 'rhodesalvarado@zomboid.com',
  			'phone': '(958) 598-3165'
  		},
  		{
  			'id': 39,
  			'name': 'Weaver Wilder',
  			'email': 'weaverwilder@zomboid.com',
  			'phone': '(950) 560-2716'
  		},
  		{
  			'id': 40,
  			'name': 'Wong Morin',
  			'email': 'wongmorin@zomboid.com',
  			'phone': '(929) 533-3000'
  		},
  		{
  			'id': 41,
  			'name': 'Cole Franklin',
  			'email': 'colefranklin@zomboid.com',
  			'phone': '(805) 520-2592'
  		},
  		{
  			'id': 42,
  			'name': 'Vinson Joseph',
  			'email': 'vinsonjoseph@zomboid.com',
  			'phone': '(801) 514-2616'
  		},
  		{
  			'id': 43,
  			'name': 'Franks Mayer',
  			'email': 'franksmayer@zomboid.com',
  			'phone': '(865) 516-2026'
  		},
  		{
  			'id': 44,
  			'name': 'Summer Sharpe',
  			'email': 'summersharpe@zomboid.com',
  			'phone': '(830) 414-3584'
  		},
  		{
  			'id': 45,
  			'name': 'Gay Atkins',
  			'email': 'gayatkins@zomboid.com',
  			'phone': '(925) 478-2379'
  		},
  		{
  			'id': 46,
  			'name': 'Hogan Simpson',
  			'email': 'hogansimpson@zomboid.com',
  			'phone': '(838) 535-3200'
  		},
  		{
  			'id': 47,
  			'name': 'Wagner Oneal',
  			'email': 'wagneroneal@zomboid.com',
  			'phone': '(805) 527-3966'
  		},
  		{
  			'id': 48,
  			'name': 'Hunter Kerr',
  			'email': 'hunterkerr@zomboid.com',
  			'phone': '(804) 589-2567'
  		},
  		{
  			'id': 49,
  			'name': 'Lynch Christian',
  			'email': 'lynchchristian@zomboid.com',
  			'phone': '(806) 583-2838'
  		},
  		{
  			'id': 50,
  			'name': 'Deena Cannon',
  			'email': 'deenacannon@zomboid.com',
  			'phone': '(954) 594-3393'
  		},
  		{
  			'id': 51,
  			'name': 'Golden Marshall',
  			'email': 'goldenmarshall@zomboid.com',
  			'phone': '(991) 540-2109'
  		},
  		{
  			'id': 52,
  			'name': 'Foster Webster',
  			'email': 'fosterwebster@zomboid.com',
  			'phone': '(943) 417-2254'
  		},
  		{
  			'id': 53,
  			'name': 'Russell Randall',
  			'email': 'russellrandall@zomboid.com',
  			'phone': '(868) 486-3470'
  		},
  		{
  			'id': 54,
  			'name': 'Phoebe Mcmahon',
  			'email': 'phoebemcmahon@zomboid.com',
  			'phone': '(978) 583-3471'
  		},
  		{
  			'id': 55,
  			'name': 'Barr Freeman',
  			'email': 'barrfreeman@zomboid.com',
  			'phone': '(917) 414-2501'
  		},
  		{
  			'id': 56,
  			'name': 'Lindsey Nelson',
  			'email': 'lindseynelson@zomboid.com',
  			'phone': '(983) 523-3149'
  		},
  		{
  			'id': 57,
  			'name': 'Herman Espinoza',
  			'email': 'hermanespinoza@zomboid.com',
  			'phone': '(846) 477-2036'
  		}
  	],
  	dispatch: action => this.setState(state => reducer(state, action))
  };

  render() {
  	return (
  		<Context.Provider value={this.state}>
  			{this.props.children}
  		</Context.Provider>
  	);
  }
}

export const Consumer = Context.Consumer;