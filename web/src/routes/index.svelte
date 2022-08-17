<script lang="ts">
	import ImageChanger from '$lib/components/image_changer.svelte'

	const commonImages = [
		{
			title: 'Finca belloc',
			description: 'Søren & Connie sammen i de vidunderlige omgivelser ved Finca Belloc.',
			img: '/images/both/IMG_0097.JPG'
		},
		{
			title: 'Love is in the air',
			description: 'Søren føler ikke rigtig for hans nye look, med hans nye flotte øre.',
			img: '/images/both/IMG_0217.JPG'
		},
		{
			title: 'Blomsterkrans',
			description: 'Nu med blomsterkrans på hovedet og flotte læber.',
			img: '/images/both/IMG_0223.JPG'
		},
		{
			title: 'Snapchat filtre',
			description: 'Vov vov, Søren og Connie er yderst aktive på snapchat!',
			img: '/images/both/IMG_0224.JPG'
		},
		{
			title: 'Snapchat filtre 2',
			description: 'Denne gang skal de forestille sig at være babier... Tror jeg?',
			img: '/images/both/IMG_0225.JPG'
		},
		{
			title: 'Snapchat filtre 3',
			description: 'De har fundet blomsterkransen frem igen, og er back in action!',
			img: '/images/both/IMG_0226.JPG'
		},
		{
			title: 'Glade',
			description: 'De virker til at være glade... Grunden er ukendt.',
			img: '/images/both/IMG_0873.JPG'
		},
		{
			title: 'Palamos ramblas',
			description: 'Det nydelige unge par liner op til billede i Palamos.',
			img: '/images/both/IMG_2213.JPG'
		},
		{
			title: 'God mad',
			description: 'God mad skal der til når man spiser i Palamos.',
			img: '/images/both/IMG_2236.JPG'
		},
		{
			title: 'Drinks tid',
			description: 'Det er blevet drinks tid i det spanske, måske der er blevet drukket for mange?',
			img: '/images/both/IMG_4035.JPG'
		},
		{
			title: 'Ældre dage',
			description: 'Der tænkes tilbage til hvordan de ældre dage.',
			img: '/images/both/IMG_9272.JPG'
		}
	]
	const sorenImages = [
		{
			title: 'Tårn af vinpropper',
			description:
				'Efter at have spist og drukket på finca belloc laves der et tårn af vinpropper.',
			img: '/images/soren/IMG_0216.JPG'
		},
		{
			title: 'Nu med skæg',
			description: 'Efter at have barberet sig hver morgen i mange år, har han endelig fået skæg!',
			img: '/images/soren/IMG_0218.JPG'
		},
		{
			title: 'Goth',
			description: 'Der eksperimenteres med mange looks efter han opdagede snapchat filtre.',
			img: '/images/soren/IMG_0220.JPG'
		},
		{
			title: 'Stang bacardi',
			description:
				'Kun Søren kan falde i søvn mens han læner sig op af væggen. Måske 1 drink for meget?',
			img: '/images/soren/IMG_0840.JPG'
		},
		{
			title: '????',
			description: 'Jeg har intet klogt at skrive her, så i må bare nyde billedet.',
			img: '/images/soren/IMG_1129.JPG'
		},
		{
			title: 'Pokemon GO',
			description: 'Efter at have opdaget Pokemon GO skulle de selvføgelig fanges allesammen!',
			img: '/images/soren/IMG_1329.JPG'
		},
		{
			title: 'SWAG',
			description: 'Søren er med på moden! Omvendt kasket og street håndtegn, kom an!',
			img: '/images/soren/IMG_1452.JPG'
		},
		{
			title: 'Øjenlæge',
			description: 'Efter en længe ventet øjenoperation fik Søren endelig sine nye øjne!',
			img: '/images/soren/IMG_1537.JPG'
		},
		{
			title: 'Smuk som altid',
			description: 'Det er utroligt hvordan du altid kan holde dig så smuk på billeder!',
			img: '/images/soren/IMG_1834.JPG'
		},
		{
			title: 'Underbukser?',
			description: 'Er det kaptajn underbukser? Eller hvad er det der befinder sig på dit hovede?',
			img: '/images/soren/IMG_1823.JPG'
		},
		{
			title: 'Pizza balance',
			description:
				'Efter at have spist nok pizzaer kan Søren nu også mestre at balancere dem på hovedet!',
			img: '/images/soren/IMG_2026.JPG'
		},
		{
			title: 'Piv fræk',
			description: 'Der er ikke noget at sige til han fangede Connie med det look!',
			img: '/images/soren/IMG_2637.JPG'
		},
		{
			title: 'Hattens',
			description: 'Søren overvejer meget om han skal begynde at gå med hat.',
			img: '/images/soren/IMG_3995.JPG'
		},
		{
			title: 'Flere hatte',
			description: 'Man kan jo ikke beslutte sig om hvilken hat uden at prøve dem alle.',
			img: '/images/soren/IMG_4001.JPG'
		},
		{
			title: 'Det er ikke en hat...',
			description: 'Det er ikke en hat Søren, men måske en hatteholder?',
			img: '/images/soren/IMG_3999.JPG'
		},
		{
			title: 'Lang tunge',
			description: 'Hvis man kan røre sin næste med tungen skal man da blære sig med det!',
			img: '/images/soren/IMG_4036.JPG'
		},
		{
			title: 'Glad i Palamos',
			description: 'Når der er vin på bordet så kan man da kun være glad.',
			img: '/images/soren/IMG_4063.JPG'
		},
		{
			title: 'Næbdyret Søren',
			description: 'Man kan mange ting med chips men at spise dem, det er ikke en mulighed. ',
			img: '/images/soren/IMG_6627.JPG'
		},
		{
			title: 'Vampyr',
			description: 'En vampyr kan man også blive til, hvis bare man har nogle bugles.',
			img: '/images/soren/IMG_6631.JPG'
		},
		{
			title: 'Isnyder',
			description:
				'Der er ikke noget at sige til at man får noget ovskæg når man spiser en god vaffelis!',
			img: '/images/soren/IMG_7704.JPG'
		},
		{
			title: 'Trofaste Noah',
			description: 'Noah er altid klar til nus og kærlighed når Søren er i sofaen.',
			img: '/images/soren/IMG_8599.JPG'
		},
		{
			title: 'Street Søren',
			description: 'Der er blevet groet noget hår siden sidst han havde kastten på.',
			img: '/images/soren/IMG_8600.JPG'
		},
		{
			title: 'Ehmm 😳',
			description: 'Jeg ved ikke lige hvad der sker her... Mit bud er ligeså godt som dit.',
			img: '/images/soren/IMG_9269.JPG'
		}
	]
	let connieImages = [
		{
			title: 'Stor mund',
			description: 'Connie viser sin store mund frem i flyet på vej til Spanien!',
			img: '/images/connie/IMG_0219.JPG'
		},
		{
			title: 'Sommerfugle',
			description: 'Sommerfuglene kommer altid når Connie er til stede!',
			img: '/images/connie/IMG_0222.JPG'
		},
		{
			title: 'Trofaste Noah',
			description: 'Trofaste Noash slår til igen! Altid klar til kærlighed på sofaen.',
			img: '/images/connie/IMG_0727.JPG'
		},
		{
			title: '🌈🌈',
			description: 'Jeg ved ikke lige hvad du har spist Connie, men en regnbue det er der! 🌈',
			img: '/images/connie/IMG_0839.JPG'
		},
		{
			title: 'Pokemon GO',
			description: 'Efter at have opdaget Pokemon GO skulle de selvføgelig fanges allesammen!',
			img: '/images/connie/IMG_1328.JPG'
		},
		{
			title: 'Høvle 🦶',
			description: 'Ordet at høvle kan altid få Connie i et godt humør. Især at høvle fødder!',
			img: '/images/connie/IMG_1936.JPG'
		},
		{
			title: '👻👻👻',
			description: 'Trods det uskyldige udseene, kan Connie godt være farlig!',
			img: '/images/connie/IMG_2204.JPG'
		},
		{
			title: 'God mad!',
			description: 'God mad kan man altid nyde. Især med flotte omgivelser og godt selvskab!',
			img: '/images/connie/IMG_2262.JPG'
		},
		{
			title: 'Selfie',
			description: 'Selfies skal der også til for at være med på moden!',
			img: '/images/connie/IMG_8876.JPG'
		},
		{
			title: 'Gasset',
			description: 'Connie er nok vandt til at blive gasset derhjemme, men ikke mens hun sover!',
			img: '/images/connie/IMG_9911.JPG'
		}
	]
</script>

<div class="flex justify-center pt-3">
	<div class="grid h-20 w-96 card bg-neutral rounded-box place-items-center">
		<span class="text-xl pt-2"><b>Tillykke Søren og Connie!</b></span>
		<div class="grid grid-cols-8">
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
			<img class="h-10 w-10" src="/partyparrt.gif" />
		</div>
	</div>
</div>
<div class="grid grid-cols-1 xl:grid-cols-3 py-5 gap-5 place-items-center">
	<ImageChanger images={commonImages} />
	<ImageChanger images={sorenImages} />
	<ImageChanger images={connieImages} />
</div>
