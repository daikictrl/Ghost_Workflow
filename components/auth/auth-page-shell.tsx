import Image from "next/image"

type AuthPageShellProps = {
  title: string
  tagline: string
  children: React.ReactNode
}

const authFeatures = [
  "Protected workflow editing",
  "Project access tied to your account",
  "Profile and logout handled securely",
]

function AuthPageShell({ title, tagline, children }: AuthPageShellProps) {
  return (
    <main className="min-h-dvh bg-background text-foreground lg:grid lg:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)]">
      <section className="hidden border-r border-border bg-card/40 px-10 py-10 lg:flex lg:flex-col lg:justify-between">
        <div className="space-y-16">
          <div>
            <div className="flex items-center gap-2">
              <Image src="/logo.webp" alt="Archi_Dev Logo" width={32} height={32} />
              <p className="text-xl font-semibold tracking-normal">Archi_Dev</p>
            </div>
            <p className="mt-2 max-w-sm text-sm leading-6 text-muted-foreground">
              {tagline}
            </p>
          </div>

          <div className="max-w-sm space-y-6">
            <h1 className="text-3xl font-semibold tracking-normal">{title}</h1>
            <ul className="space-y-3 text-sm leading-6 text-muted-foreground">
              {authFeatures.map((feature) => (
                <li key={feature}>{feature}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="flex min-h-dvh items-center justify-center px-4 py-8">
        {children}
      </section>
    </main>
  )
}

export { AuthPageShell }
