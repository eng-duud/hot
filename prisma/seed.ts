import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

async function main() {
  // Clear existing data
  await prisma.product.deleteMany({})
  await prisma.category.deleteMany({})

  // Create Categories
  const burgers = await prisma.category.create({
    data: { name: 'برجر اللحم' }
  })
  const chicken = await prisma.category.create({
    data: { name: 'دجاج مقرمش' }
  })
  const sides = await prisma.category.create({
    data: { name: 'مقبلات وجوانب' }
  })

  // Add Products
  await prisma.product.createMany({
    data: [
      {
        name: 'جراند هوت سبايسي',
        description: 'لحم بقري مشوي على اللهب، صوص حار، هلابينو، جبنة شيدر مدخنة',
        price: 3200,
        categoryId: burgers.id,
        image: 'https://images.unsplash.com/photo-1594212699903-ec8a3eca50f5?q=80&w=800'
      },
      {
        name: 'كلاسيك تشيز برجر',
        description: 'قطعة لحم بقري، جبنة، خس، طماطم، صوص هوت المميز',
        price: 2500,
        categoryId: burgers.id,
        image: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?q=80&w=800'
      },
      {
        name: 'زنجر سوبريم',
        description: 'صدر دجاج مقرمش، صوص حار، جبنة، خبز البطاطس الطازج',
        price: 2400,
        categoryId: chicken.id,
        image: 'https://images.unsplash.com/photo-1626082927389-6cd097cdc6ec?q=80&w=800'
      },
      {
        name: 'أجنحة دجاج (8 قطع)',
        description: 'أجنحة مقلية بصوص البافالو أو الباربيكيو حسب اختيارك',
        price: 1800,
        categoryId: chicken.id,
        image: 'https://images.unsplash.com/photo-1527477396000-e27163b481c2?q=80&w=800'
      },
      {
        name: 'بطاطس مقلية كبيرة',
        description: 'بطاطس ذهبية مقرمشة مع خلطة بهارات هوت سبايسي',
        price: 800,
        categoryId: sides.id,
        image: 'https://images.unsplash.com/photo-1573821663912-569905455b1c?q=80&w=800'
      }
    ]
  })

  console.log('✅ تم تنظيف قاعدة البيانات وإضافة البيانات الجديدة بنجاح!')
}

main()
  .catch((e) => {
    console.error(e)
    process.exit(1)
  })
  .finally(async () => {
    await prisma.$disconnect()
  })
