import Image from "next/image"

export const Avatar = ({ name, imageSource }) => {
  return (<ul>
    <li>
      <Image src={imageSource} width={32} height={32} alt={`Imagem do(a) ${name}`} />
    </li>
    <li>
      @{name}
    </li>
  </ul>)
}