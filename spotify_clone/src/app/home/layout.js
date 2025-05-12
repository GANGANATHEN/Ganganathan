"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const House = ({ children }) => {
  return (
    <section className="px-10 text-primary">
      {/* navbar */}
      <div className="flex gap-3 text-[14px]">
        <div className="w-[15%] flex justify-between">
          <Link className="flex items-center gap-3 py-5" href="/home/library">
            <Image
              src="/navbar/library.svg"
              width={20}
              height={20}
              alt="my-library"
            />
            <p>My Library</p>
          </Link>
        </div>
        <div className="w-[85%] flex justify-between items-center">
          <div className="flex justify-between gap-x-7 py-3">
            <Link
              className="flex items-center select gap-3 px-3 py-2 rounded-3xl"
              href="/home"
            >
              <Image src="/navbar/home.svg" width={20} height={20} alt="home" />
              <p>Home</p>
            </Link>
            <Link
              className="flex items-center gap-3 py-5"
              href="/home/discover"
            >
              <Image
                src="/navbar/discover.svg"
                width={20}
                height={20}
                alt="discover"
              />
              <p>Discover</p>
            </Link>
            <div className="relative flex items-center">
              <input
                className="h-8 pl-[20%] border-1 border-bg-gray-200 focus:border-0 outline-none focus:ring-1 focus:ring-blue-300 p-4 rounded-2xl"
                placeholder="Search..."
                type="text"
              />
              <Link
                className="absolute left-[4%] flex items-center gap-3 py-5"
                href="/home/search"
              >
                <Image
                  src="/navbar/search.svg"
                  width={20}
                  height={20}
                  alt="search"
                />
                {/* <p>Search</p> */}
              </Link>
            </div>
          </div>
          <div className="flex gap-3 items-center">
            <Link
              className="flex items-center gap-3 py-5"
              href="/home/notification"
            >
              <Image
                className="fill-black"
                src="/navbar/notification.svg"
                width={25}
                height={25}
                alt="notification"
              />
            </Link>
            <Link className="flex items-center gap-3 py-5" href="/home/secure">
              <Image
                src="/navbar/secure.svg"
                width={20}
                height={20}
                alt="secure"
              />
            </Link>
            <Link
              className="flex items-center gap-3 py-5"
              href="/home/frndsacvty"
            >
              <Image
                src="/navbar/frndsacvty.svg"
                width={25}
                height={25}
                alt="frndsacvty"
              />
            </Link>
            <Link
              className="flex items-center gap-3 py-5"
              href="/home/settings"
            >
              <Image
                src="/navbar/settings.svg"
                width={20}
                height={20}
                alt="settings"
              />
            </Link>
            <Link className="flex items-center gap-3 py-5" href="/home/profile">
              <Image
                src="/navbar/profile.svg"
                width={20}
                height={20}
                alt="profile"
              />
            </Link>
          </div>
        </div>
      </div>
      {/* side bar and contents */}
      <div className="flex gap-3 text-[14px]">
        <div className="w-[15%] flex flex-col gap-y-4 ">
          <div className="flex items-center justify-between mt-5">
            <Link className="flex items-center gap-3" href="/home/pins">
              <Image src="/sidebar/pin.svg" width={25} height={25} alt="pins" />
              <p>Pins</p>
            </Link>
            <Link href="/home/pins">
              <Image
                src="/sidebar/arrow.svg"
                width={10}
                height={10}
                alt="arrow"
              />
            </Link>
          </div>

          <div className="flex items-center justify-between">
            <Link className="flex items-center gap-3" href="/home/playlists">
              <Image
                src="/sidebar/playlists.svg"
                width={25}
                height={25}
                alt="playlists"
              />
              <p>Playlists</p>
            </Link>
            <Link className="flex items-center" href="/home/playlists">
              <Image
                src="/sidebar/arrow.svg"
                width={10}
                height={10}
                alt="arrow"
              />
            </Link>
          </div>
          <Link className="flex gap-3" href="/home/likedsongs">
            <Image
              className="mt-1"
              src="/sidebar/likedsongs.svg"
              width={25}
              height={25}
              alt="liked songs"
            />
            <p>Liked songs</p>
          </Link>
          <Link className="flex items-center gap-3" href="/home/saves">
            <Image
              src="/sidebar/saves.svg"
              width={25}
              height={25}
              alt="saves"
            />
            <p>Saves</p>
          </Link>
          <Link className="flex items-center gap-3" href="/home/albums">
            <Image
              src="/sidebar/albums.svg"
              width={25}
              height={25}
              alt="albums"
            />
            <p>Albums</p>
          </Link>
          <Link className="flex items-center gap-3" href="/home/folders">
            <Image
              src="/sidebar/folders.svg"
              width={25}
              height={25}
              alt="Folders"
            />
            <p>Folders</p>
          </Link>
          <Link className="flex items-center gap-3" href="/home/podcasts">
            <Image
              src="/sidebar/podcasts.svg"
              width={25}
              height={25}
              alt="podcasts"
            />
            <p>Podcasts</p>
          </Link>
          <Link className="flex items-center gap-3" href="/home/audiobooks">
            <Image
              src="/sidebar/audiobooks.svg"
              width={25}
              height={25}
              alt="audiobooks"
            />
            <p>Audiobooks</p>
          </Link>
          <Link className="flex items-center gap-3" href="/home/artists">
            <Image
              src="/sidebar/artists.svg"
              width={25}
              height={25}
              alt="Folders"
            />
            <p>Artists</p>
          </Link>
        </div>
        <div className="w-[85%] p-4">
          <div className="border-child">{children}</div>
          <div className="border-child">song</div>
        </div>
      </div>
    </section>
  );
};

export default House;
