"use client"

import React from "react"

import { useState } from "react"
import { Link } from "react-router-dom"
import { Home, Settings, User, ChevronDown, List, ScrollText, DollarSign, MoveHorizontal, CircleCheckBig, Send, Check, Contact} from "lucide-react"
import { cn } from "../../lib/utils"
import { INavItemProps, EventItemProps } from "../../interfaces/interfaces"

const NavItem = ({ icon, label, href, isActive }: INavItemProps) => {
    return(
        <Link to={href} className={cn(
            "flex items-center gap-3 px-4 py-2 text-sm font-medium text-gray-300 hover:bg-gray-800 hover:text-white transition-colors",
            isActive && "bg-gray-800 text-white",
          )}>
            {icon}
            <span>{label}</span>
        </Link>
    )
}

const EventItem = ({ label, href, isActive }: EventItemProps) => {
    return(
        <Link to={href} className={cn("flex items-center px-4 py-2 text-sm text-gray-400 hover:text-white transition-colors",
        isActive && "text-white",
        )}>{label}</Link>
    )
}

export default function SliderBar() {
    const [isEventsExpanded, setIseventsExpanded] = useState(true)

    return(
        <div className="flex flex-col h-screen bg-black border-r border-gray-800 h-full">
            <div className="flex items-center justify-between px-4 py-3 border-b border-gray-800">
                <div className="flex items-center gap-2">
                    {/* <div className="flex items-center justify-center w-6 h-6 rounded-full bg-gray-700">
                        <span className="text-white text-xs">C</span>
                    </div> */}
                    <span className="font-semibold text-white"> Ferreteria JRC </span>
                </div>
                <button className="text-gray-400 hover:text-white">
                    <ChevronDown className="h-6 w-6" />
                </button>
            </div>    
            <nav className="flex-1 pt-2">
                <NavItem icon={<Home className="h-6 w-6" />} label="Inicio" href="/" isActive={false} />
                <NavItem icon={<List className="h-6 w-6" />} label="Lista de Precios" href="/" isActive={true} />
                <NavItem icon={<ScrollText className="h-6 w-6" />} label="F Contingencia" href="/" isActive={false} />
                <NavItem icon={<User className="h-6 w-6" />} label="Cartera" href="/" isActive={false} />
                <NavItem icon={<Send className="h-6 w-6" />} label="Comunicados" href="/" isActive={false} />
                <NavItem icon={<Check className="h-6 w-6" />} label="Confirmaciones" href="/" isActive={false} />
                <NavItem icon={<DollarSign className="h-6 w-6" />} label="Recaudos" href="/" isActive={false} />
                <NavItem icon={<MoveHorizontal className="h-6 w-6" />} label="Traslados" href="/" isActive={false} />
                <NavItem icon={<CircleCheckBig className="h-6 w-6"/>} label="Compras" href="/" isActive={false} />
                <NavItem icon={<Contact className="h-6 w-6"/>} label="Asistencia" href="/" isActive={false} />
           </nav>
            
           {/* <div className="px-4 py-2 mt-2">
        <button
          className="flex items-center justify-between w-full text-sm text-gray-400 hover:text-white"
          onClick={() => setIsEventsExpanded(!isEventsExpanded)}
        >
          <span>Upcoming Events</span>
          {isEventsExpanded ? <ChevronUp className="h-4 w-4" /> : <ChevronDown className="h-4 w-4" />}
        </button>

        {isEventsExpanded && (
          <div className="mt-1">
            <EventItem label="Bear Hug: Live in Concert" href="/events/bear-hug" />
            <EventItem label="Six Fingers — DJ Set" href="/events/six-fingers" />
            <EventItem label="We All Look The Same" href="/events/we-all-look-the-same" />
            <EventItem label="Viking People" href="/events/viking-people" />
          </div>
        )}
      </div> */}

      {/* Bottom Navigation */}
      {/* <div className="mt-auto">
        <NavItem icon={<HelpCircle className="h-5 w-5" />} label="Support" href="/support" />
        <NavItem icon={<GitBranch className="h-5 w-5" />} label="Changelog" href="/changelog" />
      </div> */}

           <div className="flex items-center gap-3 p-4 border-t border-gray-800">
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-gray-700 overflow-hidden">
                <img src="/placeholder.svg?height=32&width=32" alt="User avatar" className="w-full h-full object-cover" />
            </div>
            <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-white truncate">Jhon Llanos</p>
                <p className="text-xs text-gray-400 truncate">sistemas@ferreteriajrc.com</p>
            </div>
            <button className="text-gray-400 hover:text-white">
                <ChevronDown className="h-5 w-5" />
            </button>
      </div>
    </div>
    )
}