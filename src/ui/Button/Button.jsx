import './button.css'

export default function Button({ href, variant = 'solid', children, ...rest }) {
  const cls = `btn btn--${variant}`
  return href ? (
    <a href={href} className={cls} {...rest}>{children}</a>
  ) : (
    <button className={cls} {...rest}>{children}</button>
  )
}