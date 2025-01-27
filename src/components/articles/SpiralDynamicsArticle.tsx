import React from 'react';
import { Card, CardContent } from '@/components/ui/card';

const SpiralDynamicsArticle = () => {
  return (
    <Card className="border-none shadow-none">
      <CardContent className="p-0">
        {/* Article Header */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 p-8 border-b">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">
            The Evolution of Values and Consciousness
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl">
            Understanding how human consciousness and values naturally evolve in response to life conditions, forming patterns that mirror evolution itself.
          </p>
        </div>

        {/* Article Content */}
        <div className="max-w-4xl mx-auto p-8">
          <article className="prose prose-lg max-w-none">
            <p className="text-lg leading-relaxed">
              Imagine standing on a mountain peak, looking down at the path that brought you there. 
              The trail doesn&apos;t move in a straight line—it spirals around the mountain, each turn 
              revealing new vistas while building upon the ground covered before. This is the 
              essence of how human consciousness and values evolve, a pattern beautifully captured 
              by the framework known as Spiral Dynamics.
            </p>

            <p>
              Just as life itself evolved from simple single-celled organisms to complex beings 
              through natural selection, our ways of thinking and being evolve to meet increasingly 
              complex challenges. This isn&apos;t a random process, nor is it a judgmental hierarchy. 
              Instead, it&apos;s a natural response to life conditions, much like how plants evolve 
              different characteristics to thrive in different environments.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">A Natural Development</h2>
            
            <p>
              Each stage in this evolution emerges when our existing ways of thinking can no 
              longer adequately address the challenges we face. Think of a child learning to walk: 
              crawling serves them well until they encounter situations where walking would be more 
              effective. The child doesn&apos;t stop being able to crawl—they add walking to their 
              repertoire of movement. Similarly, each new stage of consciousness doesn&apos;t replace 
              previous stages but transcends and includes them, creating a richer, more capable way 
              of engaging with the world.
            </p>

            <blockquote className="bg-blue-50 border-l-4 border-blue-500 p-4 my-8 rounded-r-lg italic">
              Like developing depth perception or learning to balance on a bicycle, evolution of 
              consciousness isn&apos;t something we consciously decide to do—it&apos;s an ability that 
              develops in response to necessity.
            </blockquote>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Understanding the Stages</h2>
            
            <p>
              In our earliest stage of development, survival dominates our consciousness. Like early 
              human tribes or people in extreme situations today, the focus is entirely on meeting 
              immediate physical needs. As we form bonds and find safety in groups, a magical-animistic 
              way of thinking emerges. The world becomes alive with spirits and mysteries, and tribal 
              connections provide security and meaning.
            </p>

            <p>
              As individuals begin to assert themselves, power-oriented consciousness emerges. Think of 
              the terrible twos in child development or the raw expression of ego in certain leaders. 
              This gives way to an ordered, principled consciousness as societies become more complex. 
              Here, meaning comes through absolute principles and sacred order—think of traditional 
              religious or military structures.
            </p>

            <p>
              The scientific revolution ushered in an achievement-oriented consciousness, embracing 
              rationality and individual success. This is the mindset that put humans on the moon 
              and created modern technology. Yet its focus on material success and scientific 
              reductionism eventually gives rise to a more communal, ecological consciousness. This 
              stage emphasizes harmony, equality, and environmental awareness—think of the 
              environmental movement and social justice initiatives.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Second Tier Leap</h2>
            
            <p>
              A remarkable transformation occurs when life becomes sufficiently complex. A new way 
              of thinking emerges—systemic consciousness. Rather than seeing previous stages as 
              outdated steps to be left behind, this perspective recognizes them as essential parts 
              of a larger, interconnected system. It&apos;s like gaining the ability to see in three 
              dimensions after living in a flat world.
            </p>

            <div className="bg-gray-50 p-6 rounded-lg my-8">
              <h3 className="text-xl font-semibold mb-4">Key Characteristics of Second Tier Thinking:</h3>
              <ul className="list-disc pl-6 space-y-2">
                <li>Integration of all previous stages</li>
                <li>Recognition of the necessity of each level</li>
                <li>Ability to work with multiple perspectives</li>
                <li>Understanding of natural development sequences</li>
              </ul>
            </div>

            <p>
              This second-tier consciousness naturally develops when we face challenges that can&apos;t 
              be solved from within any single previous perspective. Climate change, for instance, 
              requires us to integrate scientific understanding, ecological awareness, ordered 
              cooperation, individual initiative, and communal action. No single approach suffices; 
              we need them all, working together systemically.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">Living Systems Integration</h2>
            
            <p>
              Beyond systemic thinking lies an even more integrated consciousness—one that sees 
              the living, breathing wholeness of existence. Here, the boundaries between self and 
              world, between different value systems, between past and future, become permeable. 
              This holistic awareness doesn&apos;t just understand systems; it feels and moves with 
              them, like a dancer who has become one with the music.
            </p>

            <h2 className="text-2xl font-bold text-gray-900 mt-12 mb-6">The Path Forward</h2>
            
            <p>
              As we face increasingly complex global challenges, understanding the natural evolution 
              of consciousness becomes more crucial than ever. We&apos;re not just witnessing this 
              evolution—we&apos;re actively participating in it. By understanding how consciousness 
              develops, we can better support our own growth and help create conditions that foster 
              healthy development in others.
            </p>

            <p>
              Remember the spiral path up the mountain? Each turn builds on what came before while 
              revealing new horizons. There&apos;s no final destination—just an ongoing journey of 
              development and integration. The question isn&apos;t &quot;How do we get everyone to think like 
              us?&quot; but rather &quot;How can we support each other&apos;s natural development while working 
              together to address the challenges we face?&quot;
            </p>
          </article>
        </div>

        {/* Article Footer */}
        <div className="bg-gray-50 p-8 border-t">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-xl font-semibold mb-4">Key Takeaways</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-gray-600">Each stage of development serves a valuable purpose and emerges naturally in response to life conditions.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-gray-600">Higher stages transcend and include lower stages, creating richer ways of engaging with reality.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-blue-500 font-bold">•</span>
                <span className="text-gray-600">Understanding developmental stages helps us support both personal and collective evolution more effectively.</span>
              </li>
            </ul>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default SpiralDynamicsArticle;
