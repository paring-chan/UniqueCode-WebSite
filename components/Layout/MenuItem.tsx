import React from 'react'
import Link from 'next/link'
import { ExpandMore } from '@material-ui/icons'
import { Collapse, makeStyles } from '@material-ui/core'
import clsx from 'clsx'

const useStyles = makeStyles((theme) => ({
  expand: {
    transform: 'rotate(-90deg)',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.short,
    }),
  },
  expandOpen: {
    transform: 'rotate(0deg)',
  },
}))

const MenuItem: React.FC<{
  items: {
    label: string
    link: string
    nextLink?: boolean
  }[]
  label: string
  link?: string
}> = ({ items, label, link }) => {
  const [open, setOpen] = React.useState(false)
  const classes = useStyles()

  return (
    <div>
      <div
        onClick={() => setOpen(!open)}
        className="cursor-pointer text-3xl font-bold">
        {link?.startsWith('/') ? (
          <Link href={link}>{label}</Link>
        ) : (
          <a href={link}>{label}</a>
        )}
        <ExpandMore
          className={clsx({
            [classes.expand]: true,
            [classes.expandOpen]: open,
          })}
          fontSize="large"
        />
      </div>
      <Collapse in={open}>
        {items.map((r, i) =>
          r.nextLink ? (
            <Link href={r.link}>
              <a
                key={i}
                className="text-2xl font-bold opacity-50 hover:opacity-100 transition-all duration-500">
                {r.label}
              </a>
            </Link>
          ) : (
            <a
              key={i}
              href={r.link}
              target="_blank"
              className="text-2xl font-bold opacity-50 hover:opacity-100 transition-all duration-500">
              {r.label}
            </a>
          ),
        )}
      </Collapse>
    </div>
  )
}

export default MenuItem
