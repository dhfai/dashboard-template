
import styles from '@/styles/module/Container.module.scss'


export default function Container({
    children
}: Readonly<{
    children: React.ReactNode;
}>) {
  return (
    <div className={styles.container}>
      {children}
    </div>
  )

}
