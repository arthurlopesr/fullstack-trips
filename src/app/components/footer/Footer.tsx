import Image from "next/image";
import Link from "next/link";

interface FooterProps {

}
export function Footer(props: FooterProps) {
  return (
    <>

      <div className="bg-walterWhite p-5">

        <div className="flex items-center justify-center">
          <Image src="/logo.png" alt="logo" width={133} height={23} />
        </div>

        <div className="gap-2 flex items-center justify-center mt-2">

          <div>
            <Link href="https://www.instagram.com/arthur_lopesr/" target="_blank">
              <Image src="/instagram-icon.svg" alt="intagram" width={18} height={18} />
            </Link>
          </div>

          <div>
            <Link href="https://www.linkedin.com/in/arthur-lopesr/" target="_blank">
              <Image src="/linkedin-icon.svg" alt="Linkedin" width={18} height={18} />
            </Link>
          </div>

          <div>
            <Link href="https://github.com/arthurlopesr" target="_blank">
              <Image src="/github-icon.svg" alt="intagram" width={18} height={18} />
            </Link>
          </div>

        </div>

      </div>

    </>
  )
}
