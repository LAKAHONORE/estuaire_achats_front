import { Link } from 'react-router-dom'
import ItemsLinks from './components/items-links/ItemsLinks'
import ContactItem from './components/contact-item/ContactItem';

export default function FooterLinks() {

  const liensRapidesElements = [
    {
      label : 'Politique d\'assistance',
      link : '..'
    },

    {
      label : 'Politique de retour',
      link : '..'
    },

    {
      label : 'À propos de nous',
      link : '..'
    },

    {
      label : 'politique de confidentialité',
      link : '..'
    },

    {
      label : 'Politique du vendeur',
      link : '..'
    },

    {
      label : 'conditions générales',
      link : '..'
    },
  ];

  const liensMonCompte = [
    {
      label : 'S\'identifier',
      link : '..'
    },

    {
      label : 'Historique des commandes',
      link : '..'
    },

    {
      label : 'Ma liste d\'envies',
      link : '..'
    },

    {
      label : 'Suivi de commande',
      link : '..'
    },
  ];

  const liensEspaceVendeur = [
    {
      label : 'Devenez un vendeur !',
      span: 'Appliquer maintenant',
      link : '..'
    },

    {
      label : 'Connectez-vous au panneau de vente',
      link : '..'
    },

    {
      label : 'Télécharger l\'application Seller',
      link : '..'
    },
  ];

  const liensLivreur = [
    {
      label : 'Connectez-vous au panneau Livreur',
      link : '..'
    },

    {
      label : 'Télécharger l’application livreur',
      link : '..'
    },
  ];


  const contactItems = [
    {
      label : 'Adresse',
      value : 'Bafoussam'
    },

    {
      label : 'Téléphone',
      value : '+237 696-118-389'
    },

    {
      label : 'Email',
      value : 'infos@estuaireachats.com',
      link : 'infos@estuaireachats.com'
    },
  ];


  return (

    <>
    <div className="hidden md:grid grid-cols-4 px-16">
      <div className="flex flex-col gap-4">
        <span className="uppercase text-grayColor font-semibold">suivez-nous</span>
        <ul>
          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Politique d'assistance
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Politique de retour
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              A propos de nous
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Politique de confidentialité
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Politique du vendeur
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Conditions générales
            </Link>
          </li>
        </ul>
      </div>


      <div className="flex flex-col gap-4">
        <span className="uppercase text-grayColor font-semibold">contacts</span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-semibold text-grayColor">Adresse</span>
            <span className="text-[13px] font-semibold text-easyGrayColor">Bafoussam</span>
          </div>


          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-semibold text-grayColor">Téléphone</span>
            <span className="text-[13px] font-semibold text-easyGrayColor">+237 696-118-389</span>
          </div>


          <div className="flex flex-col gap-1">
            <span className="text-[13px] font-semibold text-grayColor">Email</span>
            <Link to={'mailto:infos@estuaireachats.com'}>
              <span className="text-[13px] font-semibold text-easyGrayColor hover:text-redColor transition">infos@estuaireachats.com</span>
            </Link>
          </div>


        </div>
      </div>



      <div className="flex flex-col gap-4">
        <span className="uppercase text-grayColor font-semibold">mon compte</span>
        <ul>
          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              S'identifier
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Historique des commandes
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Ma liste d'envies
            </Link>
          </li>

          <li>
            <Link to={'..'} className="text-easyGrayColor text-[13px] font-semibold hover:text-redColor">
              Suivi des commandes
            </Link>
          </li>

        </ul>
      </div>



      <div className="flex flex-col gap-4">
        <span className="uppercase text-grayColor font-semibold">espace vendeur</span>
        <div className="flex flex-col gap-2">
          <div className="flex flex-row gap-2">
            <span className="text-[13px] font-semibold text-easyGrayColor">Devenz vendeur !</span>
            <Link to={'..'} className="text-[13px] font-semibold text-yellow-500">Appliquer maintenant</Link>
          </div>


          <Link to={'..'}>
            <span className="text-[13px] font-semibold text-easyGrayColor hover:text-redColor transition">Connectez-vous au panneau de vente</span>
          </Link>


          <Link to={'..'}>
            <span className="text-[13px] font-semibold text-easyGrayColor hover:text-redColor transition">Télécharger l’application Seller</span>
          </Link>


          <span className="uppercase text-grayColor font-semibold my-3">livreur</span>

          <Link to={'..'}>
            <span className="text-[13px] font-semibold text-easyGrayColor hover:text-redColor transition">Connectez-vous au panneau Livreur</span>
          </Link>

          <Link to={'..'}>
            <span className="text-[13px] font-semibold text-easyGrayColor hover:text-redColor transition">Télécharger l’application livreur</span>
          </Link>

        </div>
      </div>

    </div>

    <div className="flex flex-col md:hidden">
      <ItemsLinks title='Liens rapides' elements={liensRapidesElements} />
      <ContactItem title='Contacts' elements={contactItems} />
      <ItemsLinks title='Mon compte' elements={liensMonCompte} />
      <ItemsLinks title='Espace vendeur' elements={liensEspaceVendeur} />
      <ItemsLinks title='Livreur' elements={liensLivreur} />
    </div>
    </>
  )
}
