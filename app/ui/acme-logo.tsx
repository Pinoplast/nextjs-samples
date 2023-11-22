import { lusitana } from '@/app/ui/fonts';

export default function AcmeLogo() {
  return (
    <div
      className={`${lusitana.className} flex flex-row items-center leading-none text-white`}
    >
      <img src='https://drukarmy.org.ua/_next/static/media/logo-en.22b25097.svg'></img>
    </div>
  );
}
