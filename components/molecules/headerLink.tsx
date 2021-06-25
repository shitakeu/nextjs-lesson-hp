import Link from "next/link";
import HeaderTitle from '../atoms/headerTitle';

export default function HeaderLink({path="/", title = "Home"}) {
    return (
        <Link href={path} passHref>
            <HeaderTitle title={title} />
        </Link>
    )
  }

