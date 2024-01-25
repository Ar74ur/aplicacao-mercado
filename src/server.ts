import fastify from 'fastify'
import { prisma } from './lib/prisma'

const server = fastify()

server.get('/products', async (req, reply) => {
  const products = await prisma.product.findMany
  reply.send({message: "/products"});
})

server.listen({ port: 3001 }, (err, address) => {
  if (err) {
    console.error(err)
    process.exit(1)
  }
  console.log(`Server listening at ${address}`)
})

server.get('/products/:productname', async (req, reply) => {
  await prisma.product.create({
    data: {
      name: req.params.productname,
      preco: 99,
    },
  });
});