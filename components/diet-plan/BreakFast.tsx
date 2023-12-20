import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../ui/card'
import { Avatar, AvatarFallback, AvatarImage, Image } from '@radix-ui/react-avatar'
import Link from 'next/link'
import { RecipeAvatar } from '../ai/RecipeAvatar'

export const BreakFast = () => {
  let source1="https://www.mybakingaddiction.com/wp-content/uploads/2010/08/lr-4930-720x720.jpg";
  let source2="https://insanelygoodrecipes.com/wp-content/uploads/2022/09/Homemade-Healthy-Papaya-Smoothie-with-Cinnamon-and-Oat-Flakes.jpg";
  let source3="data:image/jpeg;base64,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";
  let source4="https://foodsguy.com/wp-content/uploads/2019/10/Soaking-Beans.jpg"
  return (
    <>
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-1">
    <Link href="/diet-plan"  className='cursor-pointer'>
    <Card className='cursor-pointer'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
        Fall in love with the warm embrace of butternut squash bread
        </CardTitle>
       <RecipeAvatar props={source1}/>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Butternut Squash Bread</div>
        <p className="text-xs text-muted-foreground">
         +524 calories
        </p>
      </CardContent>
    </Card>
    </Link>
    <Link href="/diet-plan" className='cursor-pointer'>
    <Card>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
        Embrace the tropical vibes and sip the sunshine with a Papaya Smoothie
        </CardTitle>
        <RecipeAvatar props={source2}/>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Papaya Smoothie</div>
        <p className="text-xs text-muted-foreground">
         +126 calories
        </p>
      </CardContent>
    </Card>
    </Link>
    <Link href="/diet-plan" className='cursor-pointer'>
    <Card className='cursor-pointer'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
        Quinoa keer, a wholesome treat, where health and taste joyfully meet
        </CardTitle>
        <RecipeAvatar props={source3}/>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Quinoa Keer</div>
        <p className="text-xs text-muted-foreground">
          +111 calories
        </p>
      </CardContent>
    </Card>
    </Link>
    <Link href="/diet-plan" className='cursor-pointer'>
    <Card className='cursor-pointer'>
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <CardTitle className="text-sm font-medium">
        Transform humble soaked legumes into a hearty, nutritious feast
        </CardTitle>
        <RecipeAvatar props={source4}/>
      </CardHeader>
      <CardContent>
        <div className="text-2xl font-bold">Soaked Legumes</div>
        <p className="text-xs text-muted-foreground">
          +143 calories
        </p>
      </CardContent>
    </Card>
    </Link>
  </div>
    </>
  )
}

export default BreakFast;