import IconCloud from "@/components/magicui/icon-cloud";
import WordPullUp from './magicui/word-pull-up';

const slugs = [
    "typescript",
    "javascript",
    "java",
    "react",
    "html5",
    "css3",
    "nodedotjs",
    "express",
    "nextdotjs",
    "prisma",
    "amazonaws",
    "postgresql",
    "firebase",
    "nginx",
    "vercel",
    "docker",
    "git",
    "github",
    "visualstudiocode",
    "figma",
];

export function AboutSection() {
    return (
        <section className='text-white'>
            <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py:16'>
                <div className='grid place-content-center'>
                    <div className="relative flex h-full w-full max-w-[32rem] items-center justify-center overflow-hidden rounded-lg border bg-black px-20 pb-20 pt-8 ">
                        <IconCloud iconSlugs={slugs} />
                    </div>
                </div>
                <div className='mt-4 md:mt-0 text-center flex flex-col h-full'>
                    <h2 className='text-4xl font-bold text-white mb-6 md:mb-0'>About Me</h2>
                    <WordPullUp
                        className="text-base lg:text-xl text-left tracking-[-0.02em] text-white dark:text-white md:text-xs"
                        words="Hi, I'm Nikhil Chopra, a Full Stack Web Developer based in Delhi. With a passion for technology and a strong foundation in both front-end and back-end development, I specialize in creating dynamic and engaging web applications.In addition to my web development skills, I have a solid background in C++ programming, which has strengthened my problem-solving abilities and understanding of complex algorithms.I am committed to continuously expanding my skills and knowledge, and I'm always eager to embrace new challenges and opportunities. My goal is to make meaningful contributions to the IT world and collaborate on projects that push the boundaries of technology."
                    />
                </div>
            </div>
        </section>
    )
}