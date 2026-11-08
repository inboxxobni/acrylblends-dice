import type { Context } from '@deepseek-ai/cordis'
import { Acryl } from 'acrylblends'

/** Dice: a page at GET /dice. A test plugin for the collective app (spec 049 T024). */
export const name = 'acrylblends-dice'
export const inject = ['router']

export function apply(ctx: Context) {
  ctx.router.route(
    '/',
    new Acryl().get('/dice', (c) =>
      c.html(`<!doctype html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>Dice</title></head><body style="font:16px system-ui;margin:32px"><h1>Dice</h1><p>You rolled <output>${1 + Math.floor(Math.random() * 6)}</output>.</p></body></html>`),
    ),
  )
}

export async function check(ctx: Context) {
  const reply = await ctx.router.request('/dice')
  if (!reply.ok) throw new Error(`GET /dice answered ${reply.status}`)
}
