import { Download, CalendarCheck, ScrollText, HelpCircle, Phone } from 'lucide-react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { WhatsAppIcon } from '../../utils/Quick Links/Links';

const links = [
  {
    id: 'mobile',
    icon: Phone,
    label: 'Call Us',
    path: 'tel:+13052398055'
  },
  {
    id: 'whatsapp',
    icon: WhatsAppIcon,
    label: 'WhatsApp',
    link: 'https://api.whatsapp.com/send/?phone=13052398055&text=Hello&type=phone_number&app_absent=0'
  },
  {
    id: 'abstract-submission',
    icon: ScrollText,
    label: 'Submit Abstract',
    link: '/abstract-submission'
  },
  {
    id: 'brochure-download',
    icon: Download,
    label: 'Brochure download',
    link: '/FOODMICROBIOME_brochure.pdf'
  },
  {
    id: 'event-schedule',
    icon: CalendarCheck,
    label: 'Schedule',
    link:"/zerotrustai-event-schedule"
  },
  {
    id: 'faq',
    icon: HelpCircle,
    label: 'FAQs',
    link: '/faq'
  }
];

const QuickLinks = () => {
  const [hoveredId, setHoveredId] = useState(null);

  return (
    <div className="fixed bottom-14 right-0 z-20 flex flex-col space-y-3">
      {links.map(({ id, icon: Icon, label, path, link }) => {
        const isActive = hoveredId === id;
        const href = path || link;

        const classes = `flex items-center bg-white shadow-md rounded-l-full overflow-hidden transform transition-all duration-300 ${
          isActive ? 'translate-x-0' : 'translate-x-40'
        } ${id === 'mobile' ? 'animate-pulseShadow' : ''}`;

        // ✅ Only brochure uses <a>
        if (id === 'brochure-download') {
          return (
            <a
              key={id}
              href={href}
              download
              onMouseEnter={() => setHoveredId(id)}
              onMouseLeave={() => setHoveredId(null)}
              className={classes}
            >
              <div className="bg-one text-white p-3 flex items-center justify-center rounded-l-full transition-custom">
                <Icon className="h-5 w-5" />
              </div>
              <span className="ml-4 pr-4 text-sm font-medium text-one-800 whitespace-nowrap">
                {label}
              </span>
            </a>
          );
        }

        // ✅ All others remain React routes
        return (
          <Link
            key={id}
            to={href}
            onMouseEnter={() => setHoveredId(id)}
            onMouseLeave={() => setHoveredId(null)}
            className={classes}
          >
            <div className="bg-one text-white p-3 flex items-center justify-center rounded-l-full transition-custom">
              <Icon className="h-5 w-5" />
            </div>
            <span className="ml-4 pr-4 text-sm font-medium text-one-800 whitespace-nowrap">
              {label}
            </span>
          </Link>
        );
      })}
    </div>
  );
};

export default QuickLinks;
