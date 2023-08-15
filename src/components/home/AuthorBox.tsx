import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/Avatar";

export default function AuthorBox() {
  return (
    <div className="rounded-2xl bg-gray-400 bg-opacity-20 backdrop-blur-lg drop-shadow-lg text-white mx-auto max-w-2xl px-4">
      <div className="mt-10 p-6 lg:col-span-7 lg:col-start-6 lg:mt-6">
        <div className="flow-root">
          <div className="-my-12 divide-y divide-gray-200">
            <div className="py-12">
              <div className="flex items-center">
                <Avatar>
                  <AvatarImage src="profile-pic/profile.webp" />
                  <AvatarFallback>Mahmoud Beznaiguia</AvatarFallback>
                </Avatar>
                <div className="ml-4">
                  <h4 className="text-md font-bold text-white">
                    Mahmoud Beznaiguia
                  </h4>
                  <p className="text-md text-gray-300">Co-Founder, Digital Army.</p>
                </div>
              </div>
              <p className="mt-4 space-y-6 text-lg italic text-gray-100">
                “Je vous offrirai toute mon expertise en tant que consultant
                marketing spécialisé en publicités à performances et gestion de
                projets.”
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
