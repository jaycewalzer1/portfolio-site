import { useEffect, useRef } from 'react'
import './FallingLeaves.css'

const LEAF_COUNT = 18

function createLeaf(width, height) {
  const types = ['leaf--1', 'leaf--2', 'leaf--3']
  return {
    x: Math.random() * width,
    y: -20 - Math.random() * height * 0.5,
    size: 8 + Math.random() * 14,
    speedY: 0.3 + Math.random() * 0.5,
    speedX: (Math.random() - 0.5) * 0.4,
    rotation: Math.random() * 360,
    rotSpeed: (Math.random() - 0.5) * 1.5,
    sway: Math.random() * 2,
    swaySpeed: 0.01 + Math.random() * 0.015,
    swayOffset: Math.random() * Math.PI * 2,
    opacity: 0.15 + Math.random() * 0.25,
    type: types[Math.floor(Math.random() * types.length)],
    time: 0,
  }
}

function drawLeaf(ctx, leaf) {
  ctx.save()
  ctx.translate(leaf.x, leaf.y)
  ctx.rotate((leaf.rotation * Math.PI) / 180)
  ctx.globalAlpha = leaf.opacity

  const s = leaf.size

  if (leaf.type === 'leaf--1') {
    // Simple pointed leaf
    ctx.fillStyle = '#5a9a6a'
    ctx.beginPath()
    ctx.moveTo(0, -s)
    ctx.bezierCurveTo(s * 0.6, -s * 0.4, s * 0.5, s * 0.3, 0, s)
    ctx.bezierCurveTo(-s * 0.5, s * 0.3, -s * 0.6, -s * 0.4, 0, -s)
    ctx.fill()
    // Vein
    ctx.strokeStyle = '#3d7a4a'
    ctx.lineWidth = 0.5
    ctx.beginPath()
    ctx.moveTo(0, -s * 0.8)
    ctx.lineTo(0, s * 0.7)
    ctx.stroke()
  } else if (leaf.type === 'leaf--2') {
    // Round leaf
    ctx.fillStyle = '#4a8c55'
    ctx.beginPath()
    ctx.ellipse(0, 0, s * 0.45, s * 0.7, 0, 0, Math.PI * 2)
    ctx.fill()
    ctx.strokeStyle = '#357a40'
    ctx.lineWidth = 0.4
    ctx.beginPath()
    ctx.moveTo(0, -s * 0.55)
    ctx.lineTo(0, s * 0.55)
    ctx.stroke()
  } else {
    // Small sprig / tiny leaf
    ctx.fillStyle = '#6aaa75'
    ctx.beginPath()
    ctx.moveTo(0, -s * 0.6)
    ctx.bezierCurveTo(s * 0.4, -s * 0.2, s * 0.3, s * 0.3, 0, s * 0.6)
    ctx.bezierCurveTo(-s * 0.3, s * 0.3, -s * 0.4, -s * 0.2, 0, -s * 0.6)
    ctx.fill()
  }

  ctx.restore()
}

export default function FallingLeaves() {
  const canvasRef = useRef(null)

  useEffect(() => {
    const canvas = canvasRef.current
    const ctx = canvas.getContext('2d')
    let animId

    const resize = () => {
      canvas.width = window.innerWidth
      canvas.height = window.innerHeight
    }
    resize()
    window.addEventListener('resize', resize)

    const leaves = Array.from({ length: LEAF_COUNT }, () =>
      createLeaf(canvas.width, canvas.height)
    )
    // Spread initial leaves across the page
    leaves.forEach((l, i) => {
      l.y = (i / LEAF_COUNT) * canvas.height * 1.5 - canvas.height * 0.3
    })

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height)

      leaves.forEach((leaf) => {
        leaf.time += leaf.swaySpeed
        leaf.y += leaf.speedY
        leaf.x += leaf.speedX + Math.sin(leaf.time + leaf.swayOffset) * leaf.sway * 0.3
        leaf.rotation += leaf.rotSpeed

        if (leaf.y > canvas.height + 30) {
          leaf.y = -30
          leaf.x = Math.random() * canvas.width
        }
        if (leaf.x < -30) leaf.x = canvas.width + 30
        if (leaf.x > canvas.width + 30) leaf.x = -30

        drawLeaf(ctx, leaf)
      })

      animId = requestAnimationFrame(animate)
    }
    animate()

    return () => {
      cancelAnimationFrame(animId)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={canvasRef} className="falling-leaves" />
}
