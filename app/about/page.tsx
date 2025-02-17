import Image from "next/image"

export default function About() {
  return (
    <div className="space-y-6">
      <h1 className="text-3xl font-bold mb-6">About Me</h1>
      <div className="flex flex-col md:flex-row items-center md:items-start gap-6">
        <Image
          src="/placeholder.svg?height=200&width=200"
          alt="Your Name"
          width={200}
          height={200}
          className="rounded-full"
        />
        <div className="space-y-4">
          <p>
            Hello! I'm [Your Name], a passionate [Your Profession] with [X] years of experience in [Your Field]. I
            specialize in [Your Specialties] and love tackling challenging projects that push the boundaries of what's
            possible.
          </p>
          <p>
            My journey in [Your Field] began [brief background]. Since then, I've had the opportunity to work on a
            variety of projects, each contributing to my growth and expertise in the field.
          </p>
          <p>
            When I'm not [working/coding/designing], you can find me [Your Hobbies or Interests]. I believe in [Your
            Personal Philosophy or Approach to Work], and I'm always excited to collaborate on new and innovative
            projects.
          </p>
        </div>
      </div>
    </div>
  )
}

